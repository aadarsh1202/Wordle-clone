import wordList from '../word-list.txt'

export const gridDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

export const selectWordList = async () => {
    let wordlist;
    let latestWord;
    await fetch(wordList).then((response) => response.text())
        .then((result) => {
            const wordArray = result.split("\n");
            latestWord = wordArray[Math.floor(Math.random() * wordArray.length)];
            wordList = new Set(wordArray);
        })
    return { wordList, latestWord }
}