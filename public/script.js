let cookie = document.cookie.split(";").reduce((cookieObject, cookieString) => {
    let splitCookie = cookieString.split("=");
    try {
        cookieObject[splitCookie[0].trim()] = decodeURIComponent(splitCookie[1]);
    } catch (error) {
        cookieObject[splitCookie[0].trim()] = splitCookie[1];
    }
    return cookieObject;
}, []);
    
   var isAuth = cookie.userName != undefined;
    const userName = document.getElementById("userName");
    const out = document.getElementById("out");
    const auth = document.getElementById("auth");
    const reg = document.getElementById("reg");

    console.log(out);

    console.log(isAuth);

    if (isAuth) {
        out.style.display = "inline-block"
        userName.style.display = "inline-block";
        reg.style.display = "none"
        auth.style.display = "none";
        userName.innerHTML = cookie.userName;
    } else {
        reg.style.display = "inline-block"
        auth.style.display = "inline-block";
        out.style.display = "none"
        userName.style.display = "none";
    }