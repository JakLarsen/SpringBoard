

let favNum = {
    value: 11,
    async getFavNumFact(value){
        let url = `http://numbersapi.com/${this.value}/trivia?json`
        let numData = await axios.get(url);
        console.log(numData.data.text)
    }
}

favNum.getFavNumFact()


let fourNumFacts = {
    values: [0,1,5,11],
    numFacts: [],

    async getNumFacts(){   
        let val0Promise = axios.get(`http://numbersapi.com/${this.values[0]}/trivia?json`)
        let val1Promise = axios.get(`http://numbersapi.com/${this.values[1]}/trivia?json`)
        let val2Promise = axios.get(`http://numbersapi.com/${this.values[2]}/trivia?json`)
        let val3Promise = axios.get(`http://numbersapi.com/${this.values[3]}/trivia?json`)

        let v0 =  await val0Promise
        let v1 =  await val1Promise
        let v2 =  await val2Promise
        let v3 =  await val3Promise

        console.log(`Value 0 fact: ${v0.data.text}`)
        console.log(`Value 1 fact: ${v1.data.text}`)
        console.log(`Value 2 fact: ${v2.data.text}`)
        console.log(`Value 3 fact: ${v3.data.text}`)
    }
}

fourNumFacts.getNumFacts()

let deck = {
    cardsLeft: 52,
    async init(){
        let res = await axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        this.deckID = res.data.deck_id
        
        return this.deckID
    },
    async drawCard(deckID){
        let res = await axios.get(`http://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=1`)
        let cardValue = res.data.cards[0].value
        let cardSuit = res.data.cards[0].suit
        let card = {
            value:cardValue,
            suit:cardSuit
        }
        this.cardsLeft -= 1
        return card
    }
}


let drawBtn = document.getElementById('card-draw')
drawBtn.addEventListener('click', async function(){
    
    let deckID = ""
    let card = ""

    console.log(deck.cardsLeft)
    if (deck.cardsLeft == 52){
        deckID = await deck.init() 
    }
    card = await deck.drawCard(deckID) 
    console.log(`Your card is the ${card.value} of ${card.suit}.`)
})