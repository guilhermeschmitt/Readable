export const api = 'http://localhost:3001';

let { token } = localStorage;

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

export const headers = {
  'Accept': 'application/json',
  'Authorization': token
};