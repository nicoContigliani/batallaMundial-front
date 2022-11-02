import axios from "axios";
import reedToken from "../tokens/reedToken";

const getData = async (data) => {
  const { token, method, url, datas } = data;


  const urlsT = `${url}/${datas.datas}?token=${token}`
  const dataS = datas.datas


  if (!data) {
    console.log("error");
  }

  try {
    const totalsResponse = await axios.get(urlsT)
    return totalsResponse;
  } catch (error) { }





};

export default getData;


