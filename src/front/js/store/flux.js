// import { NetworkClient, NetworkRequest } from "../Services/Network/Network.js";

import { object } from "prop-types";

// const client = new NetworkClient(
//   "https://draku.herokuapp.com/"
// );

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      logUser: false,
      logSignUp: false,
      allVideos: [],
      followeres: [],
      imageProfile: "",
      imageBanner: "",
      movieG: [],
      messagesss: [],
      user: [],
      dataChannel: "",
    },
    actions: {
      logOut: () => {
        localStorage.removeItem("token");
        setStore({ logUser: false });
      },
      signUP: (signData) => {
        fetch(
          "https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/signup",
          {
            method: "POST",
            body: JSON.stringify(signData),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .catch((error) => console.error("Error:", error))
          .then((response) => {
            console.log("Success:", response);
            let mytokenSign = response.access_token;
            localStorage.setItem("tokeni", mytokenSign);
            setStore({ logSignUp: true });
          });
      },
      logIN: (logData) => {
        fetch(
          "https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/login",
          {
            method: "POST",
            body: JSON.stringify(logData),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .catch((error) => console.error("Error:", error))
          .then((response) => {
            let mytoken = response.access_token;
            localStorage.setItem("token", mytoken);
            console.log("Success:", response);
            if (response.message != "Invalid authentication") {
              setStore({ logUser: true });
              sessionStorage.setItem("token", mytoken);
            }
          });
      },
      followUSER: (follow) => {
        let myToken = localStorage.getItem("token");
        fetch(
          "https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/follow",
          {
            method: "POST",
            body: JSON.stringify(follow),
            headers: {
              Authorization: `Bearer ${myToken}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .catch((error) => console.error("Error:", error))
          .then((response) => {
            console.log("Success:", response);
          });
      },
      getFOLLOW: () => {
        let myToken = localStorage.getItem("token");
        fetch(
          "https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/follow",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${myToken}`,
            },
          }
        )
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            console.log(data);
            setStore({ followeres: data });
          })
          .catch((error) => console.error(error));
      },
      getUSER: () => {
        let myToken = localStorage.getItem("token");
        fetch(
          "https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/user",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${myToken}`,
            },
          }
        )
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            console.log(data);
            setStore({ user: data });
          })
          .catch((error) => console.error(error));
      },
      getChannel: () => {
        let myToken = localStorage.getItem("token");
        fetch(
          "https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/userChannel",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${myToken}`,
            },
          }
        )
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            console.log(data);
            setStore({ dataChannel: data });
          })
          .catch((error) => console.error(error));
      },
      getImg: () => {
        let myToken = localStorage.getItem("token");
        fetch(
          "https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/image",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${myToken}`,
            },
          }
        )
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            setStore({ imageProfile: data });
          })
          .catch((error) => console.error(error));
      },
      getMessages: () => {
        let myToken = localStorage.getItem("token");
        fetch(
          "https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/message",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${myToken}`,
            },
          }
        )
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            setStore({ messagesss: data });
          })
          .catch((error) => console.error(error));
      },
      getBan: () => {
        let myToken = localStorage.getItem("token");
        fetch(
          "https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/banner",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${myToken}`,
            },
          }
        )
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            setStore({ imageBanner: data });
          })
          .catch((error) => console.error(error));
      },
      postMessages: (msg) => {
        let myToken = localStorage.getItem("token");
        fetch(
          "https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/message",
          {
            method: "POST",
            body: JSON.stringify(msg),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${myToken}`,
            },
          }
        )
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ messagesss: data });
          })
          .catch((error) => console.error(error));
      },
      getMov: () => {
        let myToken = localStorage.getItem("token");
        fetch("https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/mov", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${myToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setStore({ movieG: data });
          })
          .catch((error) => console.error("Error:", error));
      },
      putMov: (movies) => {
        let myToken = localStorage.getItem("token");
        fetch(
          "https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/movie",
          {
            method: "PUT",
            body: JSON.stringify(movies),
            headers: {
              Authorization: `Bearer ${myToken}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.error(error));
      },
      putConf: (config) => {
        let myToken = localStorage.getItem("token");
        fetch(
          "https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/configuration",
          {
            method: "PUT",
            body: JSON.stringify(config),
            headers: {
              Authorization: `Bearer ${myToken}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.error(error));
      },

      // deleteMessages: (id) => {
      //   let myToken = localStorage.getItem("token");
      //   fetch(
      //     `https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/message/${id}`,
      //     {
      //       method: "DELETE",
      //       headers: {
      //         Accept: "application/json",
      //         Authorization: `Bearer ${myToken}`,
      //       },
      //     }
      //   )
      //     .then((res) => res.json())
      //     .catch((error) => console.error("Error:", error))
      //     .then((data) => {
      //       console.log("Success:", data);
      //     });
      // },
      putData: (Data) => {
        let myToken = localStorage.getItem("token");
        fetch(
          "https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/profile",
          {
            method: "PUT",
            body: JSON.stringify(Data),
            headers: {
              Authorization: `Bearer ${myToken}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.error(error));
      },
    },
  };
};

export default getState;
