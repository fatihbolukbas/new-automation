@AddToCart

Feature: Inventory Page Add to Cart Feature

Background:
    Given I navigate to the landing page
    And I should see e-mail and password fields
    When I fill in the e-mail field with a valid e-mail
    And I fill in the password field with a valid password
    And I click the login button
    Then I should see the inventory page

Scenario: Add to Cart Feature
    And I should see item
    And I should see item name
    And I should see item price
    And I should see the add to cart button
    And I click add to cart button
    And I should see the remove cart button