@Logout

Feature: Logout

Background:
    Given I navigate to the landing page
    And I should see e-mail and password fields
    When I fill in the e-mail field with a valid e-mail
    And I fill in the password field with a valid password
    And I click the login button
    Then I should see the inventory page

Scenario: Logout Feature
    And I should see the inventory page sidebar
    When I click the sidebar menu button
    And I should see logout option
    When I click the logout button
    Then I should be redirected to the landing page
    