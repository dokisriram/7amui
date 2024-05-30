import { Cookie } from "@/Common/api/cookies";

export const init = {
    user: {},
    isLoggedIn: Cookie.hasActiveSession(),
    isShowLoader: false,
    toaster:{
        isShowToaster:false,
        message:'',
        bgColor:''
    }
}