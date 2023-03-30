import axios from "axios";

const instance = axios.create({
  baseURL: process.env.STRAPI_URL,
  // headers: {
  //   Authorization: `Bearer 3e756df40319a33a675f0ea106c4cfd01e770a42578684a2801af652214293f6%7Cde516b664e16063007560cda53549f46d9d090afa87fdf92ec2ccb1ca640e84d`,
  // },
});

export default instance;
