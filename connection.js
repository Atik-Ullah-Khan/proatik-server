const mongoose = require("mongoose");

const uri =
  "mongodb+srv://proatik:atik12345@cluster0.rhiva.mongodb.net/proatik?";

try {
  mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Mongoose is connected");
    }
  );
} catch (e) {
  console.log("could not connect");
}
