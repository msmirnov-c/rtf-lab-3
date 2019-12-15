let cookie = document.cookie.split(";").reduce((cookieObject, cookieString) => {
    let splitCookie = cookieString.split("=");
    try {
        cookieObject[splitCookie[0].trim()] = decodeURIComponent(splitCookie[1]);
    } catch (error) {
        cookieObject[splitCookie[0].trim()] = splitCookie[1];
    }
    return cookieObject;
}, []);
    
    const userName = (document.getElementById("userName").innerHTML = cookie.userName);