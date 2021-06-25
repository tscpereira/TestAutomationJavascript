Feature: Sample feature

  Scenario Outline: As a user I want to access google

    Given I access the page http://google.com
    When I search by <search>
    Then I found the result

      Examples:
      | search      |
      | javascript  |
      | webdriverio |