import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './forgotPassword.css'
import UserService from '../../Services/userService';

const service = new UserService();

export default class signin extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            email: '',
            emailErrorFlag: false,
            emailMsg: '',
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
        })

        let isValid = false

        if(this.state.email.length ==0){
            this.setState({
                emailErrorFlag: true,
                emailMsg: 'Email id required'
            })
            isValid = true
        }
        return isValid;
    }
    
    submit =() =>{
        if (this.validate()) {
            console.log("forgotPassword failed");
        }else {
        console.log("forgotpassword successful",this.state.email);
        let userInput = {
            "email": this.state.email,
        }
        service.forgotPassword(userInput).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        })
    }
        
 }
    render(){
        return (
            
            <div class="mainContent1">
                <div className="child">
                        <div class="Logo2">
                        <span style={{ color: 'rgb(66, 133, 244)' }}>F</span>
                        <span style={{ color: 'rgb(234, 67, 53)' }}>u</span>
                        <span style={{ color: 'rgb(251, 188, 5)' }}>n</span>
                        <span style={{ color: 'rgb(66, 133, 244)' }}>d</span>
                        <span style={{ color: 'rgb(52, 168, 83)' }}>o</span>
                        <span style={{ color: 'rgb(234, 67, 53)' }}>o</span>
                        </div>
                        <div class="heading">
                            <span className="header">Find your email</span>
                            <span className="header1">Enter your phone number or recovery email</span>
                        </div>
                    <form>              
                        <div className="email">
                            <TextField error={this.state.emailErrorFlag}  name="email" id="outlined-full-width" fullWidth label="Phone number or Email" variant="outlined" size="medium" helperText={this.state.emailMsg} onChange={this.handleChange} required />
                        </div>                      
                        <div className="footerContent1" >
                            <div className="button">
                            <Button variant="contained" color="primary" onClick={this.submit}>Next</Button>
                            </div>
                        
                        </div>
                
                    </form>
                </div>
            </div>
            
            
        )
        
    }

}