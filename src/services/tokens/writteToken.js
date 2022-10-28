
const writteToken = (data) => {
  console.log("🚀 ~ file: writteToken.js ~ line 3 ~ writteToken ~ data", data)
  try {
   
    return localStorage.setItem("items", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export default writteToken;
