


let promise = axios.get('http://numbersapi.com/5/trivia?json')
    
promise.then(res => console.log(res.data.text))





let promiseArr = [];

for (let i = 1; i < 5; i++){
    promiseArr.push(axios.get(`http://numbersapi.com/${i}/trivia?json`))
}

Promise.all(promiseArr)
    .then(trivaArr => (
        trivaArr.forEach(n => console.log(n.data.text))
    ))
    .catch(err => console.log(err))

    



let url = 'http://numbersapi.com/5/trivia?json'
axios.get(url)
        .then(res => {
            console.log(res.data.text)
            return axios.get(url)
        })
        .then(res => {
            console.log(res.data.text)
            return axios.get(url)
        })
        .then(res => {
            console.log(res.data.text)
            return axios.get(url)
        })
        .then(res => {
            console.log(res.data.text)
            return axios.get(url)
        })
        .catch(err => console.log(err))


let deckData = axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
let deckID = ""
deckData.then(data => {
    deckID = data.data.deck_id
    return axios.get(`http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
    })
    .then(cardData => {
        let cardValue = cardData.data.cards[0].value
        let cardSuit = cardData.data.cards[0].suit
        let card = {
            value:cardValue,
            suit:cardSuit
        }

        console.log(card)
        return axios.get(`http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
    })
    .then(cardData => {
        let cardValue = cardData.data.cards[0].value
        let cardSuit = cardData.data.cards[0].suit
        let card = {
            value:cardValue,
            suit:cardSuit
        }

        console.log(card)
    })
    .catch(err => console.log(err))
    



let drawBtn = document.getElementById('card-draw')

drawBtn.addEventListener('click', async function(){
    console.log('draw btn clicked')

    let cardData = await axios.get(`http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)

    let cardValue = cardData.data.cards[0].value
    let cardSuit = cardData.data.cards[0].suit
    let card = {
        value:cardValue,
        suit:cardSuit
    }

    console.log(card)
})


