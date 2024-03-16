

const baseURI = "http://localhost:8082/";


const ApiEndpoints = {

  // users related api end point
  LOGIN: "/api/login",
  USERS: "/api/users",
  GETUSER:"/auth/allusers",
  DELETEUser:"/auth",
  UPDATEUser:"/auth/update",

  ADDBOOK:"book/create",
};

const HTTP_METHOD = {
  POST: "POST",
  GET : "GET",
  DELETE:"DELETE",
  PUT: "PUT",
  
};

export { ApiEndpoints, HTTP_METHOD, baseURI };
