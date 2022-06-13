import express from "express";
import {createUser, getAllUser, updateUser} from "../controllers/user-controller";

const routes = express.Router();

routes.post("/user", createUser);
routes.get("/users", getAllUser)
routes.put("/user/:id", updateUser)

export default routes;
