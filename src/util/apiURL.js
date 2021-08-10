export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:5555"
      : "https://peaceful-fjord-04479.herokuapp.com/";
  };
  