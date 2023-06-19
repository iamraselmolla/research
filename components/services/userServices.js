import http from "./http_service";
const BASE_URL={
    userDetails:'/api/userdetails'
  }

export function fetchUserDetails() {
  return http.get(BASE_URL.userDetails);
}