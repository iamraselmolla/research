import http from "./http_service";
const BASE_URL={
    userDetails:'/api/userdetails',
    createUser: '/api/signup',
    personalDetails:'/api/personaldetails',
    allUsers:'/api/allusers',
    verificationFileLink: '/api/verification?type=file',
    verificationImageLink: '/api/verification',
    addConference: '/api/conference',
    allConferences: '/api/allconferences',
    getAllFaculty : '/api/allfaculty'
  }

export function fetchUserDetails() {
  return http.get(BASE_URL.userDetails);
}
export function fetchAllFaculty() {
  return http.get(BASE_URL.getAllFaculty);
}
export function getAllConferences (){
  return http.get(BASE_URL.allConferences)
}
export function createUser(data){
  return http.post(BASE_URL.createUser, data)
}

export function putPersonalDetails(data){
  return http.put(BASE_URL.personalDetails,data)
}

export function fetchAllUsers() {
  return http.get(BASE_URL.allUsers);
}
export function verificationFile (data){
  return http.put(BASE_URL.verificationFileLink, data)
}
export function verificationImage (data){
  return http.put(BASE_URL.verificationImageLink, data)
}
export function addConferenceFromForm (data){
  return http.post(BASE_URL.addConference, data)
}

export const cloudinaryAPILink = 'https://api.cloudinary.com/v1_1/iamraselmolla/image/upload';