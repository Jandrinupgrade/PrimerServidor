const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/nombre-db";

const connect = async () => {
  try {
    const dbConection = await mongoose.connect(DB_URL);
    const { host, port, name } = dbConection.connection;
    console.log(`conectado con exito a${name} con ${port}`);
  } catch (error) {
    console.log("error conectando a DB", error);
  }
};

module.exports = { connect };
