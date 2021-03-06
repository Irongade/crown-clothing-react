import React from "react";
import FormInput from "../form-input/form-input"
import CustomButton from "../custom-button/custom-button"

import {auth, signInWithGoogle} from "../../firebase/firebase.utils"

import "./sign-in.scss";


class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }

    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);

            this.setState({email: "", password:""});
        }
        catch (err) {
            console.error(err)
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>
                    I already have an Account
                </h2>
                <span>
                    Sign in with your email and password
                </span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" handleChange={this.handleChange} type="email" name="email" value={this.state.email} required />

                    <FormInput label="password" handleChange={this.handleChange} type="password" name="password" value={this.state.password} required />

                    <div className="buttons">
                        <CustomButton type="submit" > 
                            Sign In
                        </CustomButton>
                        <CustomButton onClick= {signInWithGoogle} isGoogleSignIn > 
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;