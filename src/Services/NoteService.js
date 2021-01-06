import axios from 'axios';
export default class NoteService{

    userRegister(data){
        console.log("axios service",data);
        return axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp`,data)
        
    }
}