<<<<<<< HEAD
import * as axios from "axios";

const url='http://localhost:3001/persons/';
export const userAPI={
    getUsers(){
        debugger
        axios.get(url)
        .then(response=>{
            debugger
           return response.data;
        })
    },
    addUser(firstName,lastName){
        axios.post(url,{
            firstName:firstName,
            lastName:lastName
        }).then(response=>{
           debugger
            })
    },
    editUser(id,firstName,lastName){
        axios.put(url+id,{
            firstName:firstName,
            lastName:lastName
        }).then(response=>{
            this.props.setUsers(response.data);
        })
    },
    deleteUser(id){
        axios.delete(url+id)
        .then(response=>{
            if(response.status===200){
              return true;  
            }
        })
    }
=======
import  axios from "axios";

const url='http://localhost:3001/persons';

export const userAPI={
    getUsers(){
        return axios.get(url)
            .then(response=>{
                return response.data;
            })
    },
    addUser(firstName,lastName){
        return axios.post(url,{
            firstName:firstName,
            lastName:lastName
        }).then(response=>{
            return response;
            })
    },
    editUser(id,firstName,lastName){
        return axios.put(url+'/'+id,{
            firstName:firstName,
            lastName:lastName
        }).then(response=>{
            return response;
         })
    },
    deleteUser(id){
        return axios.delete(url+'/'+id)
            .then(response=>{
                return response;
            })
    }

>>>>>>> 56815a6aa81298864db5323ccf2a6f331c2cb785
}