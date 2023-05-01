const app = require('./app');
const defaultLocalPort = 6000;
const port = process.env.PORT || defaultLocalPort;

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
