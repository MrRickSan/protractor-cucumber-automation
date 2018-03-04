# As a WH Customer I want to be able to search for specific game on Vegas Casino and login to the webpage
Feature: Search for a specific game on Vegas

  Scenario: Search for a game and validate login dislpayed
    Given I am on the William Hill Vegas page
    When The search magnifier button is visible
    And I click on search magnifier button
    Then The search input is displayed
    When I click on the input field
    And I search for "Mayfair Roulette" game
    Then I will houver over the game card
    Then I will click on more button
    # And I click on "Play Now" button
    # Then I will validate full Login Window displayed