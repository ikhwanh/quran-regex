const fs = require('fs');

const mquran = JSON.parse(fs.readFileSync('./mquran.json'))

const searchByRegex = (regex) => {

    const filteredAyat = [];
    mquran.forEach(element => {
        if (!element) return;

        const ayat = Object.keys(element.text);
        ayat.forEach((value) => {
            if (element.text[value].search(regex) > -1) {
                filteredAyat.push({
                    index_surah: element.index_surah,
                    name: element.name,
                    name_latin: element.name_latin,
                    no: value,
                    text: element.text[value]
                })
            }
        })
    });
    return filteredAyat;
}

const regex = /wajah(?=\stuhan)|wajah(?=\sallah)/i;
// const regex = /bintang/i;
const output = searchByRegex(regex);

console.log(`regex: ${regex.toString()}`);
console.log(output);
console.log(`found: ${output.length}`);

