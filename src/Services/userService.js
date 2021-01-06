import Axios from './axiosService';

const httpService = new Axios();

export default class userService {

    baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/"

     registration = (data) => {
        // return httpService.Post(`${this.baseUrl}user/userSignUp`, data);
        return httpService.userRegister(data) ;
     }


    signin = (data) => {
         return httpService.Post(`${this.baseUrl}user/login`, data);
    }

    forgotPassword = (data) => {
        return httpService.Post(`${this.baseUrl}user/reset`, data);
   }

   resetPassword = (data,token) => {
       return httpService.Post(`${this.baseUrl}user/reset-password`,data,{
           headers: {
               Authorization:`${token}`
           },
       });
   };
}