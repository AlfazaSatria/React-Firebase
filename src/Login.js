import React, { useState, useContext } from "react";
import { AuthContext } from "./index";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDeafult();
        console.log(Auth);
        Auth.setLoggedIn(true);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={e => handleForm(e)}>
                <div class="form-group">
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        placeholder="email"
                    />
                    <br></br>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                        value={password}
                        type="password"
                        placeholder="password"
                    />
                    <hr />
                    <button class="googleBtn button btn btn-dark" type="button">
                        <img src="./google.png"
                            alt="logo"
                        />
                    Login With Google
                </button>
                    <button class="btn button btn-dark" type="submit">Login</button>
                    <span>{error}</span>
                </div>

            </form>
        </div>
    );
};

export default Login;