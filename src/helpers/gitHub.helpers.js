import { graphql } from "@octokit/graphql";

export default  {

    /**
     * 
     * @param {String} orgName 
     * @param {Number} projectId 
     * @param {Number} itemCount
     * @returns 
     */

    getProjectItems :  async (orgName,projectId,itemCount) => {
        try {
            const response = await graphql(
                `
                  query ($orgName: String!, $projectNumber: Int!, $itemCount: Int!) {
                    organization(login: $orgName) {
                      projectV2(number: $projectNumber) {
                        id
                        title
                        url
                        items(orderBy: {field: POSITION direction: ASC} last: $itemCount) {
                          nodes {
                            id
                            content {
                              ... on Issue {
                                id
                                title
                                url
                                repository {
                                    name
                                }
                                number
                                state
                                stateReason
                                createdAt
                                updatedAt
                              }
                              ... on PullRequest {
                                id
                                title
                                url
                                repository {
                                    name 
                                } 
                                number
                                state
                                createdAt
                                updatedAt
                                mergedAt
                              }
                              ... on DraftIssue {
                                id
                                title
                                body
                                createdAt
                                updatedAt
                              }
                            }
                            fieldValueByName(name: "Status") {
                              ... on ProjectV2ItemFieldSingleSelectValue {
                                name
                                field {
                                  ... on ProjectV2SingleSelectField {
                                    name
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                `,
                {
                  orgName: orgName, 
                  //@ts-ignore
                  projectNumber: parseInt(projectId),
                  itemCount: itemCount, 
                  headers: {
                    authorization: `token ${process.env["GH_TOKEN"]}`,
                  },
                }
              );
            
            return response
        } catch (error) {
            return error
        }
       
    }
    
}