/* CompGen, by the Dabbing Coders */

const fs = require('fs');

const reqLength = 4;

const callback_func = function(err, contents) {
    let sourceList = contents.split("\n");
    let resultList = getRandomSubset(sourceList,reqLength);
    padElements(resultList,16);
    console.log(new Date().toString().slice(0,24)+"\t"+resultList.join("\t"))
};

fs.readFile('sources.txt', 'utf8', callback_func);

function getRandomSubset(src,length) {
    let result = [];
    while(result.length < length){
        let r = Math.floor(Math.random()*src.length);
        if(result.indexOf(src[r]) === -1) result.push(src[r]);
    }
    return result;
}

function padElements(arr,length) { for(key in arr) { arr[key] = arr[key].padEnd(length) } }
