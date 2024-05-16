Feature: Search Functionality
    As a user of Zero Bank
    I want to use the search feature to find information about services and features without navigating through menus

    Scenario: Search for a specific banking service
        Given I am on the Zero Bank homepage
        When I enter "Online Banking" into the search field
        And I submit the search request
        Then I should see results related to Online Banking

    Scenario: Search with no results
        Given I am on the Zero Bank homepage
        When I enter "Nonexistent Service" into the search field
        And I submit the search request
        Then I should see a message indicating no results found