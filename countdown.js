'use strict';
const figlet = require('figlet');
const endMessage = "GAME OVER!!"
var curTime = 0;

/******************************************
 * Countdown.js
 * 
 * A big chunky commandline countdown timer
 ******************************************/


function isNumeric(val) { return !isNaN(parseFloat(val)) && isFinite(val) }
function showUsage() { console.log("usage: node countdown.js [minutes]") }
function end() { figlet(endMessage,updateDisplay); process.exit() }
function updateDisplay(err, data) { 
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
}
function decCurTime() { curTime--; figlet(curTime,updateDisplay); if (curTime == 0) end() }
function init(length) { curTime = length*60; setInterval(decCurTime,1000)}

if (process.argv[2] === undefined || !isNumeric(process.argv[2])) { showUsage(); process.exit() }

init(process.argv[2])