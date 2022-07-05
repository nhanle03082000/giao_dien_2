import api from "../config/api";

export const checkAuth = (data) => {
  return new Promise(async (resolve, reject) => {
    await api
      .post("/khoqua/tonkho/kiemtrathuebao?a=select", {
        jsonData: data,
      })
      .then((result) => {
        console.log(result);
        return resolve(result.data);
      })
      .catch((error) => {
        return reject(error.response);
      });
  });
};
