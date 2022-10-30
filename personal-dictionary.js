//Fill in this empty file
let words = []
//Question for professor. Why do my new added words not appear in this array when refreshed, like how a webpage does?

export function search(word){
    for (let x = 0; x < words.length; x++){
        if (words[x] === word){
            return true
        }
    }
    return false;
}

export function addWord(word){
    let AddedWords = words.push(word)
}