/* CompGen, by the Dabbing Coders December 2018 */

const fs = require('fs');

const callback_func = function(err, contents) {
    let sourceList = contents.split("\n");
    let resultList = getRandomSubset(sourceList,process.argv[3]);
    padElements(resultList,16);
    console.log(new Date().toString().slice(0,24)+"\t"+resultList.join("\t"))
};

function showUsage() { console.log("usage: node compgen.js [filepath] [# of choices required]") }

if (process.argv[2] === undefined || process.argv[3] === undefined) { showUsage(); process.exit() }

if (!fs.existsSync(process.argv[2])) { console.log("Error. File: "+process.argv[2]+" doesn't exist"); process.exit() }

console.log("pants");

fs.readFile(process.argv[2], 'utf8', callback_func);

function getRandomSubset(src,length) {
    let result = [];
    while(result.length < length){
        let r = Math.floor(Math.random()*src.length);
        if(result.indexOf(src[r]) === -1) result.push(src[r]);
    }
    return result;
}

function padElements(arr,length) { for(key in arr) { arr[key] = arr[key].padEnd(length) } }
