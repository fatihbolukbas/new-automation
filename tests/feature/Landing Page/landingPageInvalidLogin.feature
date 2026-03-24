@LandingPageInvalidLogin

Feature: Landing Page Invalid Login

Scenario: Verify Invalid Login
    Given I navigate to the landing page
    And I should see e-mail and password fields
    When I fill in the e-mail field with an invalid e-mail
    And I fill in the password field with an invalid password
    And I click the login button
    Then I should see an error message  

