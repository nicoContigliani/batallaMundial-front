import axios from "axios";
import reedToken from "../tokens/reedToken";
import writteToken from "../tokens/writteToken";

const post = async (data) => {
  let headers = {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: "Bearer " + data.token,
  };

  if (!data) {
    console.log("error");
  }
  const { token, method, url, datas } = data;
  try {
    const totalsResponse = await axios.post(
      url,
      { ...datas },
    
      data.token === "" ? "" : { headers: headers }
    );

    return totalsResponse;
  } catch (error) {}

  //   const writteDataToken = await writteToken();

  //   const getDataToken = await reedToken();
};

export default post;
