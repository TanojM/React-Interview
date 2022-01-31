import axios from 'axios';
let isGlobal = false;

const getAxios = () => {
  const axiosAuthConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
  return axios.create(axiosAuthConfig);
};

export class ApiServices {
  static getIframe = async () => {
    const axioauth = getAxios();
    return await axioauth.get(`/api/iframe-portal`);
  };
}
