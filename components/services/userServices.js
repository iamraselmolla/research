import http from "./http_service";
const BASE_URL={
    userDetails:'/api/userdetails',
    createUser: '/api/signup',
    personalDetails:'/api/personaldetails'
  }

export function fetchUserDetails() {
  return http.get(BASE_URL.userDetails);
}

export function createUser(){
  return http.post(BASE_URL.createUser)
}

export function putPersonalDetails(data){
  return http.put(BASE_URL.personalDetails,data)
}