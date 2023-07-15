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
    getAllFaculty : '/api/allfaculty',
    reserchPaper:'/api/addresearch',
    login: '/api/login',
    verifyConference : '/api/verifyConference',
    userResearch: '/api/userResearches',
    researchReference : '/api/addResearchPaperReference',
    getAllResearches : '/api/allResearchPapers',
    researchPaperStatusChange: '/api/upateResearch',
    conferenceStatus: '/api/activeConference',
  }


// export function submitResearchFile (data) {
//   return http.post(cloudinaryAPILink, data)
// }

export function conferenceStatus (values){
  return http.put(BASE_URL.conferenceStatus, values);
}

export function changeResearchPaperStatus (id, data, status){
  return http.put(BASE_URL.researchPaperStatusChange + `?id=${id}&status=${status}`, data)
}
export function fetchAllResearchs (){
  return http.get(BASE_URL.getAllResearches);
}
export function addResearchPaperRef (id){
  return http.put(BASE_URL.researchReference + `?id=${id}`);
}
export function getUserResearchFile (){
  return http.get(BASE_URL.userResearch)
}
export function verifyConferenceByAdmin(id){
  return http.put(BASE_URL.verifyConference, id)
}
export function userLogin(values){
  return http.post(BASE_URL.login,values);
}
export function fetchUserDetails() {
  return http.get(BASE_URL.userDetails);
}
export function fetchAllFaculty() {
  return http.get(BASE_URL.getAllFaculty);
}
export function getAllConferences (userType){
  return http.get(BASE_URL.allConferences + `?user=${userType}`)
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
export function addResearchPaperFile (data){
  return http.put(BASE_URL.reserchPaper, data)
}
export function verificationImage (data){
  return http.put(BASE_URL.verificationImageLink, data)
}
export function addConferenceFromForm (data){
  return http.post(BASE_URL.addConference, data)
}



