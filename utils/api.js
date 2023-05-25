import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + STRAPI_API_TOKEN);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const res = await fetch(`${API_URL}${endpoint}`, requestOptions);
  const data = await res.json();

  return data;
};
