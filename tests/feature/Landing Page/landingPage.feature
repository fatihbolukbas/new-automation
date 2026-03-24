@LandingPage

Feature: Landing Page

Scenario: Verify Landing Page Title
    Given I navigate to the landing page
    And I should verify the landing page url
    And I should see e-mail and password fields
    Then I should see the login button