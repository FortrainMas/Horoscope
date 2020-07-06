module.exports = {
    signsDeclinator,
    signInterpreter
}

function signInterpreter(sign){
    const signs = {
        "овен" : "aries",
        "телец" : "taurus",
        "близнецы" : "gemini",
        "рак" : "cancer",
        "лев" : "leo",
        "дева" : "virgo",
        "весы" : "libra",
        "скорпион" : "scorpio",
        "стрелец" : "sagittarius",
        "козерог" : "carpicorn",
        "водолей" : "aquarius",
        "рыбы" : "pisces",
        "рыба" : "pisces",
    }
    return(signs[sign.toLowerCase()] || null);
}

//Declanate signs' names or return null if sign isn't exist
function signsDeclinator(sign){
    const signs = {
        "aries" : "овнов",
        "taurus" : "тельцов",
        "gemini":"близнецов",
        "cancer" : "раков",
        "leo" : "львов",
        "virgo" : "дев",
        "libra" : "весов",
        "scorpio":"скорпионов",
        "sagittarius" : "стрельцов",
        "carpicorn" : "козерогов",
        "aquarius":"водолеев",
        "pisces":"рыб",
    }
    return( signs[sign] || null )
}