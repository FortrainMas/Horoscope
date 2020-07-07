const TelegramBot = require('node-telegram-bot-api');
const config = require('config')
const fetch =require('fetch');

//Horoscope server url
const url = "http://localhost:5000/";

//Get tg token from config
const token = config.get('TELEGRAM_BOT_TOKEN');
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    
    bot.sendMessage(msg.chat.id, "Привет. Какой у тебя знак зодиака?", {
    "reply_markup": {
        "keyboard": [
                        ["Овен", "Телец"],
                        ["Близнецы"], ["Рак"],
                        ["Лев"], ["Дева"],
                        ["Весы"], ["Скорпион"],
                        ["Стрелец"], ["Козерог"],
                        ["Водолей"], ["Рыбы"]
            ]
        }
    });
        
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const sign = isSign(msg.text)
    if(sign){
        const fetchQuery = url + `?sign=${sign}`;
        console.log(fetchQuery);
        fetch.fetchUrl(fetchQuery, function(error, meta, body){
            const prediction = JSON.parse(body.toString()).Prediction;
             bot.sendMessage(msg.chat.id, prediction);
        });
    }
    else
    {
        bot.sendMessage(msg.chat.id, "Zdarova");
    }
  // send a message to the chat acknowledging receipt of their message
  //bot.sendMessage(msg.chat.id, 'Received your messageв');
});

function isSign(sign){
    try{
    const signs = {
        "овен":"aries",
        "телец":"taurus",
        "близнецы":"gemini",
        "рак":"cancer",
        "лев":"leo",
        "дева":"virgo",
        "весы":"libra",
        "скорпион":"scorpio",
        "стрелец":"sagittarius",
        "козерог":"carpicorn",
        "водолей":"aquarius",
        "рыбы":"pisces",
        "рыба":"pisces",
    };
    if(sign.toLowerCase() in signs){
        return signs[sign.toLowerCase()];
    }
    return signs["рак"]
    }catch(e){
        console.log(e.message)
        return "ds"
    }
}