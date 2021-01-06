import React from 'react'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './registration.css'
import UserService from '../../Services/userService';
import NoteService from '../../Services/NoteService';

const service = new UserService();
const noteService = new NoteService();
export default class registration extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            firstNameErrorFlag: false,
            firstNameMsg:'',
            lastName: '',
            lastNameErrorFlag: false,
            lastNameMsg:'',
            email: '',
            emailErrorFlag: false,
            emailMsg: '',
            password: '',
            passwordErrorFlag: false,
            passwordMsg:'',
            confirmPassword: '',
            confirmPasswordErrorFlag: false,
            confirmPasswordMsg:'',
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validate = () =>{
        this.setState({
            firstNameErrorFlag: false,
            firstNameMsg:'',
            lastNameErrorFlag: false,
            lastNameMsg:'',
            emailErrorFlag: false,
            emailMsg:'',
            passwordErrorFlag: false,
            passwordMsg:'',
            confirmPasswordErrorFlag: false,
            confirmPasswordMsg:'',
        })

        let isValid = false

        if(this.state.firstName.length ==0){
            this.setState({
                firstNameErrorFlag: true,
                firstNameMsg: 'Enter first name'
            })
            isValid = true
        }

        if(this.state.lastName.length ==0){
            this.setState({
                lastNameErrorFlag: true,
               lastNameMsg: 'Enter last name'
            })
            isValid = true
        }

        if(this.state.email.length ==0){
            this.setState({
                emailErrorFlag: true,
                emailMsg: 'Enter email'
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

        if(this.state.confirmPassword.length ==0){
            this.setState({
                confirmPasswordErrorFlag: true,
                confirmPasswordMsg: 'confirm password'
            })
            isValid = true
        }
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({
            confirmPasswordMsg:'Passwords not matched'
            })
        } 


        return isValid;
    }
    
    submit =() =>{
        if (this.validate()) {
            console.log("Registration failed");
        }else {
        console.log("Registration successful",this.state.firstName,this.state.lastName,this.state.email,this.state.password);
        let userInput = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "email": this.state.email,
            "service":"advance",
            "password": this.state.password
            
        }
        console.log("user input",userInput);
        noteService.userRegister(userInput).then(data=>{
            console.log(data);
            this.props.history.push("/signin")
        }).catch(error => {
            console.log(error);
            this.props.history.push("/registration")
        })
        // service.registration(userInput).then(data => {
        //     console.log(data);
        // }).catch(error => {
        //     console.log(error);
        // })
    }
        
 }

    render(){
        return (
            
            <div class="mainContent">
                <div >
                        <div class="Logo">
                        <span style={{ color: 'rgb(66, 133, 244)' }}>F</span>
                        <span style={{ color: 'rgb(234, 67, 53)' }}>u</span>
                        <span style={{ color: 'rgb(251, 188, 5)' }}>n</span>
                        <span style={{ color: 'rgb(66, 133, 244)' }}>d</span>
                        <span style={{ color: 'rgb(52, 168, 83)' }}>o</span>
                        <span style={{ color: 'rgb(234, 67, 53)' }}>o</span>
                        </div>
                        <div class="heading">
                            <h2>Create your Fundoo Account</h2>
                        </div>
                    <form>
                        <div className="names">
                            <TextField  name="firstName" error={this.state.firstNameErrorFlag} className="firstName"  id="outlined-error-helper-text" label="First Name" variant="outlined" size="small"  helperText={this.state.firstNameMsg} onChange={this.handleChange} required/>    
                             <TextField  name="lastName" error={this.state.lastNameErrorFlag} id="outlined-error-helper-text" label="Last Name" variant="outlined" size="small" helperText={this.state.lastNameMsg}  onChange={this.handleChange} required />
                        </div>
                        <div className="email">
                            <TextField error={this.state.emailErrorFlag} name="email" id="outlined-error-helper-text" fullWidth label="Username" variant="outlined" size="small" helperText={this.state.emailMsg} onChange={this.handleChange} required />
                        </div>
                        <div className="password"  >
                            <TextField  error={this.state.passwordErrorFlag} name="password" type="password" className="password1" id="outlined-error-helper-text" label="Password" variant="outlined" size="small" helperText={this.state.passwordMsg} onChange={this.handleChange} required/>
                            <TextField error={this.state.confirmPasswordErrorFlag} name="confirmPassword" type="password" id="outlined-basic" label="Confirm " variant="outlined" size="small" helperText={this.state.confirmPasswordMsg} onChange={this.handleChange} required/>
                        </div>
                        <div className="checkbox">
                                <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}></Checkbox>
                                Show Password
                        </div>
                        <div className="footerContent" >
                        <Button color="primary" component={Link} to="/signin">Sign in instead</Button>
                            <div className="button">
                            <Button variant="contained" color="primary" onClick={this.submit} >Next</Button>
                            </div>                       
                        </div>              
                    </form>
                </div>
                <div className="image">
                    
                        <img src="/assets/account.svg" width="244" height="244"/>
                        <figcaption className="imageCaption">One account. All of Google working for you.</figcaption>
                </div>
            </div>
            
            
        )
        
    }

}