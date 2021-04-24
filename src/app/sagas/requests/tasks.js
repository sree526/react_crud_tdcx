import axios from 'axios';
import {put} from 'redux-saga/effects';
export function taskGet(action){
    console.log(action.payload);
    if(action.payload) {
        return axios.get(`http://localhost:8080/tasks?name=${action.payload}`);
    } else
        return axios.get('http://localhost:8080/tasks');
}

export function taskPost(action) {
     console.log('task post' +action);
    return axios.post('http://localhost:8080/tasks',action.payload);

}
export function taskPut(action) {
    console.log('task put' +action);
    return axios.put(`http://localhost:8080/tasks/${action.payload._id}`,action.payload);

}

export function taskDelete(action) {
    console.log('task delete' +action.payload);
    return axios.delete(`http://localhost:8080/tasks/${action.payload}`);

}
