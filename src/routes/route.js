import { Router } from "express";

import githubController from "../controllers/github.controller.js";

const router = Router();

/**
 * @param {import ("express").Request} req
 * @param {import ("express").Response} res
 */
router.get('/project/:idProject/items', githubController.get)

export default router