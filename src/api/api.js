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
    // editUser=(id,firstName,lastName)=>{
        // axios.put('http://localhost:3001/persons'+id,{
        //     firstName:firstName,
        //     lastName:lastName
        // }).then(response=>{
        //     this.props.setUsers(response.data);
    //     // })
    // },
    deleteUser(id){
        return axios.delete(url+'/'+id)
            .then(response=>{
                return response;
            })
    }

}