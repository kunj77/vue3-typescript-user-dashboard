import http from "./http-common";

class UserDataService {
  getDataForPersonalUser() {
    return http.get("/api/personal/user");
  }

  getDataForManagedUser() {
    return http.get('/api/managed/user');
  }

  getDocuments() {
    return http.get('/api/documents');
  }

  getCareerGoal() {
    return http.get('/api/career-goal');
  }
}

export default new UserDataService();