const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("the blog API is running", () => {
  // Optional: you could check a health endpoint here
});

When("I request the list of users", function () {
  cy.request("/api/v1/users").as("usersResponse");
});

Then(
  "I should get a successful response with a list of users",
  function () {
    cy.get("@usersResponse").then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.headers["content-type"]).to.include("application/json");
      expect(resp.body).to.be.an("array");
    });
  }
);

Then("each user should contain required fields", function () {
  cy.get("@usersResponse").then((resp) => {
    if (Array.isArray(resp.body) && resp.body.length > 0) {
      const user = resp.body[0];
      // Adjust to your actual JSON format
      expect(user).to.have.property("id");
      // Common Rails attributes for a user-like model
      const possibleNameKeys = ["name", "full_name", "username"]; 
      const hasName = possibleNameKeys.some((k) => Object.prototype.hasOwnProperty.call(user, k));
      expect(hasName, `Expected one of ${possibleNameKeys.join(", ")}`).to.eq(true);
      // Email is common but optional; keep it loose
      // If your API guarantees it, uncomment the assertion below
      // expect(user).to.have.property("email");
    }
  });
});
