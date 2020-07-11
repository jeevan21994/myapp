import axios from 'axios';
// temporary user api
export const getUser = () => axios.get('/users/1');
export const getUsers = () => axios.get('/users');
