@InventoryPageElementVerfication

Feature: Inventory Page Element Verfication

Background:
    Given I navigate to the landing page
    And I should see e-mail and password fields
    When I fill in the e-mail field with a valid e-mail
    And I fill in the password field with a valid password
    And I click the login button
    Then I should see the inventory page

Scenario: Verify Inventory Page Elements
    And I should see the inventory page header
    And I should see the inventory page title text
    And I should see the inventory page product list
    And I should see the inventory page product sort options
    Then I should see the inventory page sidebar