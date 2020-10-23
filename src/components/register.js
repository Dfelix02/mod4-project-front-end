import React from "react";
import "../css/loginForms.css";

class Register extends React.Component {
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

    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    confirmPassword = (evt) =>{
        evt.preventDefault()
        if (this.state.password === this.state.confirmPassword){
            fetch(`http://localhost:3000/users/register`,{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(this.state)
            })
            .then(res => res.json())
            .then(userObj => {
                console.log(userObj)
            })
        
        }
        else{
            alert("Passwords must match")
        }
        
    }
    // handleSubmit = () => {
    //     fetch(`http://localhost:3000/users/login`,{
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify({
                
    //         })
    //     })
    // }
    render() { 
        return ( 
            <div className="container_forms">
                    <div className="logo_forms">
                        <h3>welcome</h3>
                    </div>
                    <div className="row">
                        <div className="register_form">
                            <h2>Sign Up</h2>
                            <form autoComplete="off" onSubmit={this.confirmPassword}>
                                <input type="text" name="username" value={this.state.username} required placeholder="Username" onChange={this.handleChange}></input>
                                <input type="email" name="email" value={this.state.email} required placeholder="Email" onChange={this.handleChange}></input>
                                <input type="password" name="password" value={this.state.password} required placeholder="password" onChange={this.handleChange}></input>
                                <input type="password" name="confirmPassword" value={this.state.confirmPassword} required placeholder="Confirm Password" onChange={this.handleChange}></input>
                                <input type="text" name="first_name" value={this.state.first_name} required placeholder="First Name" onChange={this.handleChange}></input>
                                <input type="text" name="last_name" value={this.state.last_name} required placeholder="Last Name" onChange={this.handleChange}></input>
                                <input type="text" name="address1" value={this.state.address1} required placeholder="Address 1" onChange={this.handleChange}></input>
                                <input type="text" name="address2" value={this.state.address2} required placeholder="Address 2" onChange={this.handleChange}></input>
                                <input type="text" name="city" value={this.state.city} required placeholder="City" onChange={this.handleChange}></input>
                                <input type="text" name="country" value={this.state.country} required placeholder="Country" onChange={this.handleChange}></input>
                                <input type="number" name="zip" value={this.state.zip} required placeholder="Zip Code" onChange={this.handleChange}></input>
                                <input type="number" name="phone" value={this.state.phone} required placeholder="Phone Number" onChange={this.handleChange}></input>
                                <button className="login_register" type="submit"> Register</button>
                                <p>You have an account? <a href="#"  onClick={this.props.toggleForm} className="switch">Login Now</a></p> 
                            </form>
                        </div>
                    </div>
            </div>            
        );
    }
}
 
export default Register;