import axios, {CanceledError} from 'axios'

export default axios.create({
    baseURL:'//jsonplaceholder.typicode.com/',
})