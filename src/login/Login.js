import React from "react";

const Login = (props) => {
    return (
        <section className="login-page">
            <h2>Zaloguj się</h2>
            <form>
                <div className="form-group">
                    <input type="email" name="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <input type="password" name="password" placeholder="Hasło"/>
                </div>

                <div className="form-group form-group--buttons">
                    <button className="btn" type="submit">Zaloguj się</button>
                </div>
            </form>
        </section>
    )
};

export default Login;
