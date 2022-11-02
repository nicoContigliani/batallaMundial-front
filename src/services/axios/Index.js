import get from "./get";
import getData from "./getData";
import post from "./post";
import put from "./put";
import deletes from "./delete";

//data y metodo
const IndexAxios = async (data) => {
  console.log("🚀 ~ file: Index.js ~ line 9 ~ IndexAxios ~ data", data)
  
  switch (data.method) {
    case "get":
      const getDataAxios = await get(data);
      return getDataAxios;
    //   break;
    case "getData":
      const getDataDataAxios = await getData(data);
      return getDataDataAxios;
    //   break;
    case "post":
      const postDataAxios = await post(data);
      return postDataAxios;
    //break;
    case "deletes":
      const delenteDataAxios = await deletes(data);
      return delenteDataAxios;
    //   break;
    case "put":
      const putDataAxios = await put(data);
      return putDataAxios;
    //   break;

    default:
      break;
  }
};

export default IndexAxios;
