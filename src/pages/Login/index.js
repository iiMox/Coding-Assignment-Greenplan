import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import users from "../../utils/users.json";

import "./Login.css";
import Green from "../../images/login.jpg";
import Cross from "../../images/cross.png";

const Login = () => {
    const navigate = useNavigate();
    const errorRef = useRef(null);

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const showError = (text) => {
        errorRef.current.textContent = text;
        errorRef.current.parentElement.classList.add("show");
        setTimeout(() => {
            errorRef.current.parentElement.classList.remove("show");
        }, 2000);
    };

    const onSubmit = () => {
        let login;
        users.forEach((user) => {
            if (user.username === credentials.username) login = user;
        });

        if (login == null) showError("User doesn't exist!");
        else if (login.password !== credentials.password)
            showError("Wrong credentials!");
        else navigate("/dashboard");
    };

    return (
        <div className='login'>
            <div className='container'>
                <img src={Green} alt='Green' />
                <div className='separator'></div>
                <form
                    onSubmit={(e) => {
                        if (
                            credentials.username !== "" &&
                            credentials.password !== ""
                        ) {
                            e.preventDefault();
                            onSubmit();
                        }
                    }}
                >
                    <input
                        type='text'
                        placeholder='Username'
                        required
                        onChange={(e) => {
                            setCredentials({
                                ...credentials,
                                username: e.target.value,
                            });
                        }}
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        onChange={(e) => {
                            setCredentials({
                                ...credentials,
                                password: e.target.value,
                            });
                        }}
                        required
                    />
                    <div className='error'>
                        <img src={Cross} alt='Cross' />{" "}
                        <span ref={errorRef}></span>
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
