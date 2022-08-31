async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };
  if (data != undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }
  const token = sessionStorage.getItem("authToken");

  if (token) {
    options.headers["X-Authorization"] = token;
  }


  try {
    const response = await fetch(url, options);

    if (response.ok != true) {
      const error = await response.json();
      throw new Error(error.message);
    }
    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (error) {
    alert(error);
    throw error;
  }
}
const get = request.bind(null, "GET");
const post = request.bind(null, "POST");
const put = request.bind(null, "PUT");
const del = request.bind(null, "DELETE");

export { get, post, put, del as delete };
