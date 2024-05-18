import { sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";

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
            window.localStorage.setItem("user", JSON.stringify(user));
            return "";
        }else{
            sendEmailVerification(user);
            return "Confirme seu e-mail antes de fazer login!";
        }
    }catch(e){
        console.error(e);
    }
}

const authLogout = (auth) => {
    signOut(auth);
    window.localStorage.removeItem("user");
    window.location.reload();
}

export {
    isLoggedIn,
    authLogin,
    authLogout
}