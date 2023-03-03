import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://adcavalcant:123@cluster0.xkmttgz.mongodb.net/alura-node"
);

const db = mongoose.connection;

export default db;