import axios from 'axios';

const getAxios = () => {
  const axiosAuthConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
    },
  };
  return axios.create(axiosAuthConfig);
};

export class ApiServices {
  static getDetails = async () => {
    const axioauth = getAxios();
    return await axioauth.get(`https://randomuser.me/api`);
  };
}
