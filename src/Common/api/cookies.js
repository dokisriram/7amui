function getDate(days) {
    const now = new Date();
    now.setDate(now.getDate() + days)
    return now;
}

function getCookiesObject(cookies) {
    const cookiesArr = cookies.split(';');
    return cookiesArr.reduce((init, cookieValue) => {
        const [key, value] = cookieValue?.split('=');
        init[key?.trim()] = value?.trim();
        return init;
    }, {})
}


export class Cookie {
    static setCookie(key, value, days) {
        if (days) {
            document.cookie = `${key}=${value};expires=${getDate(days)}`
        } else {
            document.cookie = `${key}=${value}`
        }
    }
    static getCookie(key) {
        const cookiesObj = getCookiesObject(document.cookie)
        return cookiesObj[key];
    }
    static deleteCookie(key) {
        document.cookie = `${key}=;expires=${getDate(-1)}`
    }
    static clearCookie() {
        const cookiesObj = getCookiesObject(document.cookie)
        for(key in cookiesObj){
            document.cookie = `${key}=;expires=${getDate(-1)}`
        }
    }

    static hasActiveSession(){
        return this.getCookie('token') ? true : false
    }
}