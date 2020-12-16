export const URL = {
  local: "http://localhost:8080/",
  server: "https://plasma-donor.herokuapp.com/",
};

const env = URL.server;

export const API = {
  upload: `${env}api/patient/upload`,
  addPatient: `${env}api/patient/create`,
  editPatient: `${env}api/patient/findById`,
  updatePatient: `${env}api/patient/update`,
  listPatients: `${env}api/patient/findAll`,
  requestPlasma: `${env}api/plasma/request`,
  listDonors: `${env}api/plasma/request/close/getdata`,
  closeDonationRequest: `${env}api/plasma/request/close/submit`,
};
