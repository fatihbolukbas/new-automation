@LandingPageLogin

Feature: Landing Page Login

Scenario: Verify Login
    Given I navigate to the landing page
    And I should see e-mail and password fields
    When I fill in the e-mail field with a valid e-mail
    And I fill in the password field with a valid password
    And I click the login button
    Then I should see the inventory page
