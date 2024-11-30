
const mongoose = require("mongoose");

const connectToMongo = async () => {
  await mongoose
    .connect("mongodb+srv://mongodb:mongodb@mycluster.cq58k.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster")
    .then(() => console.log("DB Connected"))
    .catch((err) => console.error("DB Connection Error: ", err));
};

module.exports = connectToMongo;
