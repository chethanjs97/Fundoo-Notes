import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './signin.css'
import UserService from '../../Services/userService';
import { Link } from 'react-router-dom';

const service = new UserService();

export default class signin extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            email: '',
            emailErrorFlag: false,
            emailMsg: '',
            password: '',
            passwordErrorFlag: false,
            passwordMsg:'',
        }
    }
    
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validate = () =>{
        this.setState({
            emailErrorFlag: false,
            emailMsg:'',
            passwordErrorFlag: false,
            passwordMsg:'',
        })

        let isValid = false

        if(this.state.email.length ==0){
            this.setState({
                emailErrorFlag: true,
                emailMsg: 'Email id required'
            })
            isValid = true
        }

        if(this.state.password.length ==0){
            this.setState({
                passwordErrorFlag: true,
                passwordMsg: 'Enter password'
            })
            isValid = true
        }
        return isValid;
    }
    
    submit =() =>{
        if (this.validate()) {
            console.log("Login  failed");
        }else {
        console.log("login successful",this.state.email,this.state.password);
        let userInput = {
            "email": this.state.email,
            "password": this.state.password,
        }
        service.signin(userInput).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        })
    }
        
 }

    render(){
        return (
            
            <div class="mainContent2">
                <div className="child2">
                        <div class="Logo1">
                        <span style={{ color: 'rgb(66, 133, 244)' }}>F</span>
                        <span style={{ color: 'rgb(234, 67, 53)' }}>u</span>
                        <span style={{ color: 'rgb(251, 188, 5)' }}>n</span>
                        <span style={{ color: 'rgb(66, 133, 244)' }}>d</span>
                        <span style={{ color: 'rgb(52, 168, 83)' }}>o</span>
                        <span style={{ color: 'rgb(234, 67, 53)' }}>o</span>
                        </div>
                        <div class="heading">
                            <span className="header">Sign in</span>
                            <span className="header1">Use your Fundoo Account</span>
                        </div>
                    <form>
                
                        <div className="email">
                            <TextField error={this.state.emailErrorFlag}  name="email" id="outlined-full-width" fullWidth label="Email or phone" variant="outlined" size="medium" helperText={this.state.emailMsg} onChange={this.handleChange} required />
                        </div>
                        <div className="password"  >
                            <TextField  error={this.state.passwordErrorFlag} name="password" type="password" className="password1" id="outlined-full-width"  fullWidth label="Password" variant="outlined" size="medium" helperText={this.state.passwordMsg} onChange={this.handleChange} required  />
                        </div>
                        <div className="forgotPassword"  >
                        <Button color="primary" component={Link} to="/forgotPassword">Forgot password?</Button>
                        </div>
                        <div className="footerContent2" >
                            <Button color="primary" component={Link} to="/registration">Create account</Button>
                            <Button variant="contained" color="primary" onClick={this.submit}>Next</Button>                       
                        </div>
                
                    </form>
                </div>
            </div>
            
            
        )
        
    }

}