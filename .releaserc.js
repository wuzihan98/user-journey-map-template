
module.exports = {
  extends: "semantic-release-config-gitmoji",
  plugins: [
    ["@semantic-release/git", { 
      assets: ["src/*.yml", "CHANGELOG.md", "package.json"] 
    }]
  ]
};