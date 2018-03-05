# As a WH Customer I want to be able to search for specific 
# game on Vegas Casino and login to the webpage

Feature: Search for a specific game on Vegas

@desktop
  Scenario: Search for a game and validate login window dislpayed
    Given I am on the William Hill Vegas page
    And The search magnifier button is visible
    When I click on search magnifier button
    Then The search input is displayed
    When I click on the input field
    And I search for "Mayfair Roulette" game
    Then I will houver over the game card
    And I click on More button
    Then I will check if the game name "Mayfair Roulette" is correctly displayed
    And I click on Play Now button
    Then I will validate full Login Window displayed

@mobile
  Scenario: Search for a game and validate login window dislpayed
    Given I am on the William Hill Vegas page
    And The search magnifier button is visible
    When I click on search magnifier button
    Then The search input is displayed
    When I click on the input field
    And I search for "Mayfair Roulette" game
    Then I will click on the game card
    Then I will check if the game name "Mayfair Roulette" is correctly displayed on mobile
    And I click on Play Now button
    Then I will validate full Login Window displayed