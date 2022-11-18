const express = require("express");
const mongoose = require("mongoose");

const appRoutes = require("./src/routes");

const app = express();


app.get("/health", (req, res) => {
  res.json({
    status: true,
  });
});

app.use('/', appRoutes);

// Connect to mongoDB
let mongoDB =
  process.env.MONGODB_URL ||
  "mongodb+srv://rishabh570:tgh1apbgut0QBQ@pagination-cluster.sawuo.mongodb.net/sample_supplies?retryWrites=true&w=majority";
console.log("mongoDB: ", mongoDB);
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

mongoose.connection.on(
  "error",
  console.error.bind(console, "❌❌❌ MongoDB Connection Error ❌❌❌")
);

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
  console.log(`🎉🎉🎉 Application running on port: ${PORT} 🎉🎉🎉`);
});

module.exports = server;