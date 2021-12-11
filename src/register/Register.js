import React from "react";

const Register = (props) => {
    return (
        <section className="login-page">
            <h2>Załóż konto</h2>
            <form>
                <div className="form-group">
                    <input type="email" name="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <input type="password" name="password" placeholder="Hasło"/>
                </div>
                <div className="form-group">
                    <input type="password" name="password2" placeholder="Powtórz hasło"/>
                </div>

                <div className="form-group form-group--buttons">
                    <button className="btn" type="submit">Załóż konto</button>
                </div>
            </form>
        </section>
    )
};

export default Register;
