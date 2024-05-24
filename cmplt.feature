Feature: Login And search
    As a valid user
    I want to login into application and search services
    Scenario: Valid Login
        Given I open login page
        When I submit login
        Then I should see homepage  
    Scenario: Search for a specific banking service
        Given I am on the Zero Bank homepage
        When I enter "Online Banking" into the search field
        Then I should see results related to Online Banking

    Scenario: Search with no results
        Given I am on the Zero Bank homepage
        When I enter "Nonexistent Service" into the search field
        Then I should see a message indicating no results found