

//It is the file for some methods working with Daily_Prediction.json
//The main aim of json file is to save our daily predictions. 
//During the day users will get same horoscopes for each sign individual.
//We need daily predictions to make users believe in horoscope, at least make them believe that we believe and have backend logic

const { json } = require('express');
const fs = require('fs').promises;

module.exports = {getDailyPredict, setDailyPredict, cleanPredictions}

//Return prediction for sended sign
async function getDailyPredict(sign){
    const dp = await open();
    return dp[sign];
}

//Return all data saved to Daily_prediction.json
async function open(){
    data = await fs.readFile('../server/Daily_prediction.json');
    return(JSON.parse(data))
}

//Set newPrediction for sign
async function setDailyPredict(newPredict, sign){
    const dp = await open();
    dp[sign] = newPredict;
    set(JSON.stringify(dp));
}

//Save changed daily predictions to file
async function set(newPredictionState){
    const data = new Uint8Array(Buffer.from(newPredictionState));
    fs.writeFile('../server/Daily_prediction.json', data);
}

//At midnight function clears predictions of every signs
async function cleanPredictions(){
    //dp - daily predictions
    const dp = await open();
    Object.keys(dp).forEach(key=>{
        dp[key] = null
    })   
    await set(JSON.stringify(dp));
}