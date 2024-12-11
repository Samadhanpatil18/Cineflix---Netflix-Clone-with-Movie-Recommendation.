import checkDataValidation from "../utils/validation.js";
import Header from "./Header.jsx";
import {useRef, useState} from "react";
import {auth} from '../utils/firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser} from "../utils/userSlice.js";
import {PROFILE_PIC, SITE_TEXT} from "../utils/constants.js";

const Login = () => {
    const [isSignIn, setSignIn] = useState(true);
    const [errorMsg, setErrorMsg] = useState();
    const name = useRef("");
    const email = useRef("");
    const password = useRef("");
    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignForm = () => {
        setSignIn(!isSignIn);
    }

    const handleSubmit = (email, password) => {
        const message = checkDataValidation(email.current.value, password.current.value);
        setErrorMsg(message)

        if (message != null) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value,
            )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);

                    updateProfile(auth.currentUser, {
                        displayName: name.current.value,
                        photoURL: PROFILE_PIC
                    }).then(() => {
                        const {uid, email, displayName, photoURL} = auth.currentUser;

                        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))


                    }).catch((error) => {
                        setErrorMsg(error.message)
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + " : " + errorMessage);
                    setErrorMsg(errorMessage)

                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in
                    // const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + " : " + errorMessage);
                    setErrorMsg(errorMessage)
                });
        }
    }
    return (
        <div className="login bg-cover ">
            <Header/>
            <form
                onSubmit={e => e.preventDefault()}
                className="flex flex-col justify-center w-full h-full sm:h-fit sm:w-[450px]  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 p-2 sm:p-14">

                <h1 className="font-bold text-3xl mb-4">{isSignIn ? SITE_TEXT.signInText : SITE_TEXT.signUpText}</h1>
                {!isSignIn && <input ref={name} type="text" placeholder="Name"/>}

                <input ref={email} type="email" placeholder="email"/>
                <input ref={password} type="password" placeholder="password"/>
                <p>{errorMsg}</p>

                <button
                    className="px-4 py-2 m-4 bg-[--primary] hover:bg-[--secondary]"
                    onClick={() => handleSubmit(email, password)}>
                    {isSignIn ? SITE_TEXT.signInText : SITE_TEXT.signUpText}
                </button>

                <p className="capitalize text-gray-400">{isSignIn ? SITE_TEXT.subSignInText : SITE_TEXT.subSignOutText}
                    <span
                        onClick={() => handleSignForm(email, password)}
                        className="text-white cursor-pointer hover:underline font-semibold">
                        {isSignIn ? SITE_TEXT.signUpLinkText : SITE_TEXT.signInLinkText}
                    </span>
                </p>
            </form>
        </div>
    )
}

export default Login
