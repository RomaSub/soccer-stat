const rollbarConfig = {
  //accessToken: import.meta.env.VITE_ROLLBAR_TOKEN,
  accessToken: "5b24e0ba111845ddac29dbfe46e4c052",
  payload: {
    environment: "production"
  },
  captureUncaught: true,
  captureUnhandledRejections: true
};

export default rollbarConfig;
