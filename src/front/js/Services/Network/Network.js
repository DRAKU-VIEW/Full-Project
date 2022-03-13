function NetworkClient(baseURL, cors = true) {
  this.baseURL = baseURL;
  this.cors = cors ? "no-cors" : "cors";
  this.send = async (request) => {
    request.performRequest(this.baseURL, this.cors);
  };
}
function Decodable(response) {
  this.response = response;
  this.decoder = () => {
    return this.response.json();
  };
}
function Error(message) {
  this.message = message;
}
function NetworkBehaviour() {
  this.success = (response) => {
    const decodable = new Decodable(response);

    return decodable.decoder();
  };

  this.failure = (err) => {
    return new Error(String(err));
  };
}
function NetworkRequest(endpoint, headers, method = "GET", body = null) {
  this.endpoint = endpoint;
  this.method = method;
  this.headers = headers;
  this.body = body != null ? JSON.stringify(body) : null;
  this.performRequest = (baseURL, cors) => {
    console.log(this.headers)
    fetch(`${baseURL}${this.endpoint}`, {
      method: this.method,
      headers: this.headers,
      mode: cors,
      body: body,
    })
      .then((response) => new NetworkBehaviour().success(response))
      .then((data) => console.log(data))
      .catch((err) => new NetworkBehaviour().failure(err));
  };
}

export { NetworkRequest, NetworkClient };
