import gitHubHelpers from "../helpers/gitHub.helpers.js";

export default {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  get: async (req, res) => {
    try {
      //@ts-ignore
      const gitHubData = await gitHubHelpers.getProjectItems(process.env.GITHUB_ORG, process.env.GITHUB_PROJECT_ID,100);

      console.log(gitHubData);

      return res.json(gitHubData);
      
    } catch (/**@type {any} */ error) {
      console.log(error.response.data);
      return res.json(error);
    }
  },
};
