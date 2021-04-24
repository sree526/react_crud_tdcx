import axios from 'axios';

export function requestLogin(action){
    console.log('login' +action.payload);
    return axios.post('http://localhost:8080/login',action.payload);
}

