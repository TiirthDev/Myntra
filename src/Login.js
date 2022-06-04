import React from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom"

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_400,c_limit,fl_progressive/assets/images/2022/3/16/d4edb37c-aee8-4989-86f4-33b117edd4bc1647415464555-Banner_Login-Landing-page--1-.jpg" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign Up</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" />
                    <h5>Password</h5>
                    <input type="password" />
                    <br />
                    <p>By continuing, you agree to the <span className="pink">Terms of Use</span> & <span className="pink">Privacy Policy</span></p>
                    <Link to="/">
                        <button className="btn">Sign Up</button>
                    </Link>

                </form>
                <p className="bottomText">Have Trouble Logging In? <span className="pink">Get Help</span></p>
            </div>
        </div>
    )
}

export default Login;
