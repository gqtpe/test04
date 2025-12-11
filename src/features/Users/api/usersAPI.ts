import axios from "axios";
import type {DefaultResponse, ItemsResponse, User} from "@/features/Users/types/types.ts";

const API_KEY = import.meta.env.VITE_API_KEY;
const instance = axios.create({
    baseURL: "https://reqres.in/api",
    headers:{
        'x-api-key': API_KEY
    }
})

const usersAPI = {
    getAllUsers: (page: number)=>{
        return instance.get<ItemsResponse<User[]>>(`/users?per_page=6&page=${page}`)
    },
    getUser: (userID: number)=>{
        return instance.get<DefaultResponse<User>>(`/users/${userID}`)
    },
    createUser: (name: string)=>{
        return instance.post<User>(`/users/${name}`, {name})
    },
    deleteUser: (userID: number)=>{
        return instance.delete(`/users/${userID}`)
    },
}


export default usersAPI