const fs = require("fs");
const axios = require('axios')

const fileName = process.argv[2]
console.log(fileName)



/** Textual markov chain generator */


class MarkovMachine {

    /** build markov machine; read in text.*/
  
    constructor(text) {
        let words = text.split(/[ \r\n]+/);
        this.words = words.filter(c => c !== "");
        this.uniqueWords = []
        this.endWords = []
        this.numWords = this.words.length
        this.chains = {}
        this.wordMap = {}

        this.generateUniqueWords()
        this.makeWordMap()
        this.makeChains()
        this.makeText(this.numWords)
    }
  
    /** set markov chains:
     *
     *  for text of "the cat in the hat", chains will be
     *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */
  
    generateUniqueWords(){
        //Scan all unique words into an object
        this.words.forEach(word => {
            word = word.replace(/[,\/#!$?%\^&\*;:{}=\_~()]/g,"")
            word = word.charAt(0).toLowerCase() + word.slice(1)
            if (this.uniqueWords.includes(word) || this.endWords.includes(word)){
            }
            else{
                this.uniqueWords.push(word)
                if (word.includes(".")){
                    this.endWords.push(word)
                }
            }
        })
    }

     makeWordMap(){
        console.log('In makeWordMap')
        console.log(this.wordMap)

        for(let i=0; i<this.uniqueWords.length; i++){   
            let ourKey = this.uniqueWords[i]
            this.wordMap[ourKey] =  []

        }
            //Structure:
            // this.uniqueWords =['word at idx 0', 'word at idx 1']
            // this.wordMap = {
            //     uniqueWordAt0: ["associated1", "associated2"]
            //     uniqueWordAt1: ["associated1", "associated2"]
            // }
        console.log(this.wordMap)
    }

    makeChains() {
        
        //For a machine that can take in any text file

        //for all endwords, their only value is null in the chain object

        //For each word, check the word after it - add it to that words list of next words
        for (let i = 0; i < this.words.length; i++){
            let ourWord = this.words[i]
            console.log(ourWord)
            //What is the next word?
            let nextWord = this.words[i+1]
            //Is taht word already associated with it in the mapping?
            this.wordMap[ourWord] = //I need some sort of way to get list items appended here...
            console.log()
            //If not, add it to the map
        }
    }
    
  
  
    /** return random text from chains */
  
    makeText(numWords = 100) {
        
        let count = 0
        let nextWord = this.wordMap[0]
        let ourText = ""

        //Until we reach null
        while(nextWord != null){
            if (count == 0){
                ourText += `${nextWord.charAt(0).toUpperCase() + nextWord.slice(1)} `
            }
            else{
                ourText += `${nextWord} `
            }
            //grab the choices of next word to choose from random for each word
            let choiceLength = this.chains[nextWord].length
            let nextWordNum  = Math.floor(Math.random()*choiceLength)
            //grab the next word
            nextWord = this.chains[nextWord][nextWordNum]
            count += 1
        }
        ourText = ourText.trimEnd() + "."
        console.log(ourText)
    }
}

function readInFile(fileName){
    fs.readFile(`${fileName}`, 'utf8', (err, data)=>{
        if (err){
            console.log("ERROR")
            console.log(err)
            process.kill(1)
        }
        else{
            let nm = new MarkovMachine(data)
        }
    })
}

readInFile(fileName)



// let mm = new MarkovMachine("the cat is in the hat");
