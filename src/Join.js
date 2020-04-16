import React, { useState, useContext } from "react";
import { AuthContext } from "./index";
import * as firebase from "firebase";

const Join = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDeafult();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                if (res.user) Auth.setLoggedIn(true);
            })
            .catch(e => {
                setErrors(e.message);
            })
        console.log(Auth);
        Auth.setLoggedIn(true);
    };

    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
            firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
                console.log(result)
                Auth.setLoggedIn(true)
            })
            .catch(e => {setErrors(e.message)
            });
    };

    return (
        <div>
            <h1>Join</h1>
            <div class="container">
                
                    <form onSubmit={e => handleForm(e)}>
                        <div class="form-group">
                            <input class="form-control"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                name="email"
                                type="email"
                                placeholder="email"
                            />
                            <br></br>
                            <input class="form-control"
                                onChange={e => setPassword(e.target.value)}
                                name="password"
                                value={password}
                                type="password"
                                placeholder="password"
                            />
                            <hr />
                            <button onClick={() => handleGoogleLogin()} class = "googleBtn btn-dark" type = "button">
                                <img src="./google.png"
                                    alt="logo"
                                />
                    Login With Google
                </button>
                            <button class="btn button btn-dark btn-block" type="submit">Join</button>
                            <span>{error}</span>
                        </div>
                    </form>
                
            </div>

        </div>
    );
};

export default Join;