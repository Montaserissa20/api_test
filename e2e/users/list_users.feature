Feature: List users
  As a client of the blog API
  I want to fetch the list of users
  So that I can display them to admins

  Background:
    Given the blog API is running

  Scenario: Fetch users successfully
    When I request the list of users
    Then I should get a successful response with a list of users
    And each user should contain required fields

