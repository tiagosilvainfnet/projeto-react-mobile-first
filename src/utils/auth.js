import { sendEmailVerification, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const initSetup = async (auth) => {
    console.log('oi');
}

const isLoggedIn = (navigate) => {
    const user = window.localStorage.getItem("user");
    const route = window.location.pathname;

    if(user){
        if(route === "/login"){
            navigate("/");
        }else{
            return;
        }
    }else{
        navigate("/login");
    }
}

const authLogin = async (auth, email, password) => {
    try{
        const response = await signInWithEmailAndPassword(auth, email, password);
        const user = response.user;
        if(user.emailVerified){
            console.log(user)
            window.localStorage.setItem("user", JSON.stringify(user));
            return "";
        }else{
            sendEmailVerification(user);
            return "Confirme seu e-mail antes de fazer login!";
        }
    }catch(e){
        throw e;
    }
}

const authLogout = (auth) => {
    signOut(auth);
    window.localStorage.removeItem("user");
    window.location.reload();
}

const getUser = () => {
    try{
        return JSON.parse(window.localStorage.getItem("user"))
    }catch(e){
        return null;
    };
}

export {
    isLoggedIn,
    authLogin,
    authLogout,
    initSetup,
    getUser
}