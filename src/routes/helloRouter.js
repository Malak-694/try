import { Router } from "express";
import { authMiddleware } from "../middleware/auth.js";

const routes = Router();

routes.get("/",authMiddleware, async (req, res) => {
	res.status(200).send({ message: "Hello World!" });
});

export default routes;
