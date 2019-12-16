// Устанавливаем куки
function setCookie( name, value, expires, path, domain, secure ) {
    document.cookie = name + "=" + escape(value) +
        ((expires)  ?  "; expires=" + expires.toGMTString():   "") +
        ((path)  ?  "; path=" + path   :   "")   +
        ((domain)  ?  "; domain="   +  domain :   "")   +
        ((secure)  ?  ";   secure"  :   "");
}

// Получаем куки
function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

//Удаляем все куки
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
