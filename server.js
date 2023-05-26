const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = process.env.MONGO_URL;

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR ", err);
    else {
      console.log("MongoDB: Connected");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = process.env.PORT || 3003;
      server.listen(PORT, () => {
        console.log(
          `The server is running successfully on port ${PORT}, http://localhost:${PORT} `
        );
      });
    }
  }
);
