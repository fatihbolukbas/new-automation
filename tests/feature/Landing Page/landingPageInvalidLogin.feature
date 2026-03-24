@LandingPageInvalidLogin

Feature: Landing Page Invalid Login

Scenario: Verify Invalid Login with Incorrect Credentials
    Given I navigate to the landing page
    And I should see e-mail and password fields
    When I fill in the e-mail field with an invalid e-mail
    And I fill in the password field with an invalid password
    And I click the login button
    Then I should see an error message  

Scenario: Verify Invalid Login with Incorrect Username
    Given I navigate to the landing page
    Then I should see e-mail and password fields
    When I fill in the e-mail field with an incorrect username
    And I fill in the password field with a valid password
    And I click the login button
    Then I should see an error message 

Scenario: Verify Invalid Login with Incorrect Password
    Given I navigate to the landing page
    Then I should see e-mail and password fields
    When I fill in the e-mail field with a valid e-mail
    And I fill in the password field with an incorrect password
    And I click the login button
    Then I should see an error message

Scenario: Verify Invalid Login with Empty Fields
    Given I navigate to the landing page
    Then I should see e-mail and password fields
    When I click the login button
    Then I should see an error message indicating that fields cannot be empty

Scenario: Verify Invalid Login with Empty Username
    Given I navigate to the landing page
    Then I should see e-mail and password fields
    When I fill in the password field with a valid password
    And I click the login button
    Then I should see an error message indicating that the username field cannot be empty

Scenario: Verify Invalid Login with Empty Password
    Given I navigate to the landing page
    Then I should see e-mail and password fields
    When I fill in the e-mail field with a valid e-mail
    And I click the login button
    Then I should see an error message indicating that the password field cannot be empty