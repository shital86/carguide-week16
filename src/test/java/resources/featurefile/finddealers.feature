Feature: Find the dealers and verify

  Scenario: Find the dealers and verify the dealers are in list
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click ‘Find a Dealer’
    Then I navigate to ‘car-dealers’ page
    And I should see the dealer names dealersName are display on page
      | 3 Point Motors - New        |
#      | 3MT True Value Auto         |
#      | A Drive Car Sales & Rentals |
#      | ABC Motors                  |
#      | AMR Mazda Used              |