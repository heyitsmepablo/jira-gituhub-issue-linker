import { Router } from "express";
import octokit from "@octokit/rest";
const router = Router();

/**
 * @param {import ("express").Request} req
 * @param {import ("express").Response} res
 */
router.get('/cards', (req, res) => {
    const ocktokit = new octokit({auth: process.env["GITHUB_TOKEN"]});

})