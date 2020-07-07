module.exports = {
    signsDeclinator,
    checkSign
}

function checkSign(el){
    const signs = [
        "aries",
        "taurus",
        "gemini",
        "cancer",
        "leo",
        "virgo",
        "libra",
        "scorpio",
        "sagittarius",
        "carpicorn",
        "aquarius",
        "pisces",
        "pisces",
    ];
    let sign = false;
    if(signs.includes(el)){
        sign = el;
    }
    return( sign || null);
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