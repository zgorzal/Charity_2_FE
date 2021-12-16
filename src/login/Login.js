import React, {Component} from "react";

let email
let password


class Login extends Component {

    LoginUser = (event) => {
        this.props.LoginUser(event, email, password);
    }

    render() {
        return (
            <section className="login-page">
                <h2>Zaloguj się</h2>
                <form onSubmit={this.LoginUser}>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email"
                               onChange={e => email = e.target.value}/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Hasło"
                               onChange={e => password = e.target.value}/>
                    </div>

                    <div className="form-group form-group--buttons">
                        <button className="btn" type="submit">Zaloguj się</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default Login;
