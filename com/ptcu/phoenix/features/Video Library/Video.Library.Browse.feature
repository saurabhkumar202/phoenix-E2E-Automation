Feature: Video Library: Browse
  As a user of PTCU I can browse Video Libraries

  Scenario: Select tutorials by family & versions
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I browse Video Library by product family
    Then I see the results based on family selection

  Scenario: Select tutorials by product & versions
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I browse Video Library by product family
    When I browse Video Library by product name
    Then I see the results based on product name selection
    When I browse Video Library by product release
    Then I see the results based on product release selection

  Scenario: Bread crumbs selection takes to the respective results
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I browse Video Library by product family
    When I browse Video Library by product name
    Then I see the results based on product name selection
    When I browse Video Library by product release
    When I click on the bread crumbs
    Then I see the results based on the bread crumb selected

  Scenario: With browser back/forward,
  the user should be able to traverse in browser history
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I browse Video Library by product family
    When I browse Video Library by product name
    Then I see the results based on product name selection
    When I navigate back with browser button
    Then I see the browse history

  Scenario: The result thumbnails should display the tutorial details
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I browse Video Library by product family
    When I browse Video Library by product name
    Then I see the results based on product name selection
    Then I see the title, description, product family and duration for each result

  Scenario: Browse and pagination URL
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I browse Video Library by product family
    When I browse Video Library by product name
    When I try the pagination
    Then I land on the another page
    Then I see the results based on product name selection
    Then I see the title, description, product family and duration for each result