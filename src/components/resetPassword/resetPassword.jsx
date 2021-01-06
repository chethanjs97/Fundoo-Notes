import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './resetPassword.css'
import UserService from '../../Services/userService';

const service = new UserService();

export default class signin extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            password: '',
            passwordErrorFlag: false,
            passwordlMsg: '',
            confirmPassword: '',
            confirmPasswordErrorFlag: false,
            confirmPasswordlMsg: '',
        }
    }
    
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validate = () =>{
        this.setState({
            passwordErrorFlag: false,
            passwordMsg:'',
            confirmPasswordErrorFlag: false,
            confirmPasswordMsg:'',

        })

        let isValid = false

        if(this.state.password.length ==0){
            this.setState({
                passwordErrorFlag: true,
                passwordMsg: 'Enter new password'
            })
            isValid = true
        }

        if(this.state.confirmPassword.length ==0){
            this.setState({
                confirmPasswordErrorFlag: true,
                confirmPasswordMsg: 'Confirm new password'
            })
            isValid = true
        }
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({
            confirmPasswordMsg:'Passwords not matched'
            })
            isValid = true
        } 
        return isValid;
    }
    
    submit =() =>{
        if (this.validate()) {
            console.log("resetPassword failed");
        }else {
        console.log("resetpassword successful",this.state.password);
        let userInput = {
            "newPassword": this.state.password
        }
        let token = this.props.match.params.token;
        service.resetPassword(userInput,token).then(data => {
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
                            <span className="header">Reset your password</span>
                            <span className="header1">Enter your new password</span>
                        </div>
                    <form>              
                        <div className="newPassword">
                            <TextField error={this.state.passwordErrorFlag}  name="password" id="outlined-full-width" fullWidth label="new password" variant="outlined" size="medium" helperText={this.state.passwordMsg} onChange={this.handleChange} required />                    
                        </div>  
                        <div className="confirmNewPassword">
                        <TextField error={this.state.confirmPasswordErrorFlag}  name="confirmPassword" id="outlined-full-width" fullWidth label="confirm password" variant="outlined" size="medium" helperText={this.state.confirmPasswordMsg} onChange={this.handleChange} required />
                        </div>                    
                        <div className="footerContent1" >
                            <div className="button">
                            <Button variant="contained" color="primary" onClick={this.submit}>Reset</Button>
                            </div>
                        
                        </div>
                
                    </form>
                </div>
            </div>
            
            
        )
        
    }

}