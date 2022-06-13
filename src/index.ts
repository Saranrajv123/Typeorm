import dotenv from "dotenv"
import { AppDataSource } from "./data-source";
import express from "express";

dotenv.config()
import userRoutes from "./routes/user-routes";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/", userRoutes);

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
    app.listen(port, () => {
      console.log("server running at " + port);
    });

    // const user = new User();
    // user.first_name = "Timber";
    // user.last_name = "Saw";
    // user.email = "timber@gmail.com";
    // user.gender = "Male";
    // user.country_of_birth = "India";
    // user.date_of_birth = "15/08/1947";
    // await AppDataSource.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await AppDataSource.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log(
    //   "Here you can setup and run express / fastify / any other framework."
    // );
  })
  .catch((error) => console.log(error));
