import axios from "axios";

const url = "http://localhost:3001/persons";

export const USERAPI = {
  getUsers() {
    return axios.get(url).then(
      (response) => {
        return response;
      },
      (error) => {
        return error.request.status;
      }
    );
  },
  getUser(id) {
    return axios.get(url + "/" + id).then(
      (response) => {
        return response;
      },
      (error) => {
        return error.request.status;
      }
    );
  },
  addUser(firstName, lastName) {
    return axios
      .post(url, {
        firstName: firstName,
        lastName: lastName,
      })
      .then(
        (response) => {
          return response;
        },
        (error) => {
          return error.request.status;
        }
      );
  },
  editUser(id, firstName, lastName) {
    return axios
      .put(url + "/" + id, {
        firstName: firstName,
        lastName: lastName,
      })
      .then(
        (response) => {
          return response;
        },
        (error) => {
          return error.request.status;
        }
      );
  },
  deleteUser(id) {
    return axios.delete(url + "/" + id).then(
      (response) => {
        return response;
      },
      (error) => {
        return error.request.status;
      }
    );
  },
};
