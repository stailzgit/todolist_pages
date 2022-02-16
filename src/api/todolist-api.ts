import axios from 'axios'
import { TodoType } from "../store/reducers/todo-reducer";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const todolistsAPI = {
    getTodolists() {
        return instance.get<TodoType[]>('todos');
    },
}
