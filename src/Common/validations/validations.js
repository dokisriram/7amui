export const regExp = {
    "REQUIRED": (val) => {
        const exp = /\S/;
        if(!exp.test(val)){
            return "Please Enter value"
        }
    },
    "EMAIL": (val) => {
        const exp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!exp.test(val)){
            return "Please Enter valid Email"
        }
    },
    "MIN5CHARS": (val) => {
        const exp = /\s{5,}/
        if(!exp.test(val)){
            return "Should Min 5 chars"
        }
    }
}