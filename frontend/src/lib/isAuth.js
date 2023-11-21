const isAuth = () => {
  console.log(localStorage.getItem("token"))
  console.log(Boolean(localStorage.getItem("token")))
  return localStorage.getItem("token");
};

export const userType = () => {
  return localStorage.getItem("type");
};

export default isAuth;
