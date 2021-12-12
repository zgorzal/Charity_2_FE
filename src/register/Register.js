import React, {Component} from "react";


class Register extends Component {

    state = {
        email: "",
        password: "",
        repeatPassword: "",
    }

    addUser = (event) => {
        this.props.AddUser(event, this.state.email, this.state.password, this.state.repeatPassword);
    }

    handleInputEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleInputPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleInputRepeatPassword = (e) => {
        this.setState({
            repeatPassword: e.target.value
        })
    }

    render() {
        return (
            <section className="login-page">
                <h2>Załóż konto</h2>
                <form>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email" onChange={this.handleInputEmail}/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Hasło" onChange={this.handleInputPassword}/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password2" placeholder="Powtórz hasło"
                               onChange={this.handleInputRepeatPassword}/>
                    </div>

                    <div className="form-group form-group--buttons">
                        <button className="btn" onClick={this.addUser}>Załóż konto</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default Register;
