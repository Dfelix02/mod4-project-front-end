import React from 'react';
import Login from "./login"
import Register from "./register"



class LoginForms extends React.Component {
    state = { 
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        address1: "",
        address2: "",
        city: "",
        country: "",
        zip: "",
        phone: "",
        repeat_password: "",
        toggle: true

    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    confirmPassword = () =>{
        alert("Passwords must match")
    }
    handleToggle =() =>{
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render() { 
        return ( 
                <div className="row">
                    {this.state.toggle ? <Login toggleForm={this.handleToggle}/> : <Register toggleForm={this.handleToggle}/>}
                </div>
        );
    }
}

export default LoginForms;