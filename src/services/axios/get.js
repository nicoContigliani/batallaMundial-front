// import axios from "axios";

import reedToken from "../tokens/reedToken";
import writteToken from "../tokens/writteToken";
import urlJson from "../../urlJson.json";
// import * as dotenv from 'dotenv'
// require('dotenv').config()





const get = async (data) => {
  console.log(urlJson.login, "ajam");
  const writteDataToken = await writteToken(data);

  const getDataToken = await reedToken();
  return getDataToken
};

export default get;
