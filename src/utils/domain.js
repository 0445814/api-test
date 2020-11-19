export default ({ dev, prod }) =>
  process.env.NODE_ENV === "production" ? prod : dev;
