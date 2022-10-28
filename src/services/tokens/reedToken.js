const readToken = () => {
  const items = JSON.parse(localStorage.getItem("items"));
  return items;
};

export default readToken;
