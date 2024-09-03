import mongoose from "mongoose";

export default () => {
  const connect = () => {
    mongoose
      .connect(
        "mongodb+srv://tarekahm12:8KYsswePinrw56Ei@cluster0.oec4s.mongodb.net//LinkUp?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => {
        console.log("successfully connected to db");
      })
      .catch((error) => {
        console.log("there is an error on conncting db ", error);
        return process.exit(1);
      });
  };
  connect();
  mongoose.connection.on("disconnected", connect);
};
