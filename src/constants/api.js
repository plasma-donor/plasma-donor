export const URL = {
  local: "http://localhost:8080/",
  heroku: "https://plasma-donor.herokuapp.com/",
  aws: "https://plasmadonation-env.eba-hycfdfsp.us-east-2.elasticbeanstalk.com/",
};

const env = URL.heroku;
// const env = URL.aws;

export const API = {
  upload: `${env}api/patient/upload`,
  addPatient: `${env}api/patient/create`,
  editPatient: `${env}api/patient/findById`,
  updatePatient: `${env}api/patient/update`,
  listPatients: `${env}api/patient/findAll`,
  requestPlasma: `${env}api/plasma/request`,
  listDonors: `${env}api/plasma/request/close/getdata`,
  closeDonationRequest: `${env}api/plasma/request/close/submit`,
  listDonorsList: `${env}api/patient/findAllDonors`,
};
