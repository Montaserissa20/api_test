Feature: List blog posts
  As a client of the blog API
  I want to fetch the list of posts
  So that I can display them to users

  Background:
    Given the blog API is running

  Scenario: Fetch posts successfully
    When I request the list of posts
    Then I should get a successful response with a list of posts
    And each post should contain required fields

