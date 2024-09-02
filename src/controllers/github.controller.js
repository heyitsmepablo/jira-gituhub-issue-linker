import gitHubHelpers from "../helpers/github.helpers.js";

export default {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  get: async (req, res) => {
    try {
      //@ts-ignore
      const gitHubData = await gitHubHelpers.getProjectItems(process.env.GH_ORG, process.env.GH_PROJECT_ID,100);

      console.log(gitHubData);

      return res.json(gitHubData);
      
    } catch (/**@type {any} */ error) {

      console.log(error.response.data);
      
      return res.json(error);
    }
  },


  /**
   * 
   * @param {import ("express").Request} req 
   * @param {import ("express").Response} res 
   * 
   */

  create: async (req, res) => {
    try {
      // const response = await gitHubHelpers.createIssueInProject(
      //   req.body.repoName
      //   req.body.title,
      //   req.body.body,
      //   req.body.assignee
      // );
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  },

};
