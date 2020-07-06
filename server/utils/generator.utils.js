module.exports = {
    signsDeclinator,
    signInterpreter
}

function signInterpreter(){}

//Declanate signs' names or return null if sign isn't exist
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
    return( signs[sign.toLowerCase()] || null )
}