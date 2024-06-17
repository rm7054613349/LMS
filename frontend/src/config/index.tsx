const config = require(
  `./${process.env.REACT_APP_ENVIRONMENT}`,
).default;

console.log("config", config)

export default config;
