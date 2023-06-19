import http from "./http_service";
const BASE_URL={
    userDetails:'/api/userdetails',
    createUser: '/api/signup'
  }

export function fetchUserDetails() {
  return http.get(BASE_URL.userDetails);
}

export function createUser(){
  return http.post(BASE_URL.createUser)
}