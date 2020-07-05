module.exports = {
    makePrediction,
    signsDeclinator,
}

function makePrediction(sign){
    sign = signsDeclinator(sign);
    if(!sign) { return null; }
    const predictionStart = `Звёзды говорят, что в этом месяце у ${sign} `;
    const predictionBody = "";
    return(
        predictionStart + predictionBody
    );
}

function signsDeclinator(sign){
    signs = {
        "овен" : "овнов",
        "телец" : "тельцов",
        "близнецы":"близнецов",
        "рак" : "раков",
        "лев" : "львов",
        "дева" : "дев",
        "весы" : "весов",
        "скорпион":"скорпионов",
        "стрелец" : "стрельцов",
        "козерог" : "козерогов",
        "водолей":"водолей",
        "рыбы":"рыб",
        "рыба":"рыб",
    }
    return(signs[sign.toLowerCase()]|| null)
}