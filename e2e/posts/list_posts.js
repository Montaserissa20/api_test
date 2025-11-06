const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("the blog API is running", () => {
  // Optionally, you could do a lightweight health check here.
  // Keeping it as a no-op so the scenario stays fast and focused.
});

When("I request the list of posts", function () {
  cy.request("/posts").as("postsResponse");
});

Then(
  "I should get a successful response with a list of posts",
  function () {
    cy.get("@postsResponse").then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.headers["content-type"]).to.include("application/json");
      expect(resp.body).to.be.an("array");
    });
  }
);

Then("each post should contain required fields", function () {
  cy.get("@postsResponse").then((resp) => {
    if (Array.isArray(resp.body) && resp.body.length > 0) {
      const post = resp.body[0];
      // Adjust these keys to match your Rails serializer/JSON format
      expect(post).to.have.property("id");
      expect(post).to.have.property("title");
      expect(post).to.have.property("body");
    }
  });
});

