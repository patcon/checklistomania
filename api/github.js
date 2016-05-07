var GitHubApi = require("github");

var github = new GitHubApi({
      version: "3.0.0",
      protocol: "https",
      host: "api.github.com",
      timeout: 5000,
      headers: {
          "user-agent": "checklistomania" 
      }
  });

github.authenticate({
      type: "oauth",
      key: process.env.GITHUB_CLIENT_ID,
      secret: process.env.GITHUB_CLIENT_SECRET
});

var github_privileged = new GitHubApi({
      version: "3.0.0",
      protocol: "https",
      host: "api.github.com",
      timeout: 5000,
      headers: {
          "user-agent": "checklistomania-privileged"
      }
  });

github_privileged.authenticate({
      type: "basic",
      username: process.env.GITHUB_TOKEN_OWNER,
      password: process.env.GITHUB_ORG_READ_TOKEN
});

module.exports = {github: github, github_priv: github_privileged};
