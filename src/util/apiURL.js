export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:5555"
      : "https://arcane-badlands-16372.herokuapp.com/";
  };
  