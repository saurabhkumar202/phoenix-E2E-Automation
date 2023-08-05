@PTCULC-3698
Feature: Video Library: Search
  As a user of PTCU I can search tutorials

  Scenario Outline: Search tutorials by search term and search button
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I search tutorials by <search term> keyword
    Then I see the search results based on <search term> keyword
    When I select a tutorial to view
    Then I land on Video Library view page
    Then I see the bread crumbs
    Then I see the title of the tutorial
    Then I see the Product Name, tutorial type and the tutorial author
    Then I see the tutorial Video, text and images

    Examples:
      | search term |
      | Creo |

  Scenario Outline: Search tutorials by blank search term
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I search tutorials by <search term> keyword
    Then I do not see the search results

    Examples:
      | search term |
      |  |

  Scenario Outline: Search tutorials by invalid search term
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I search tutorials by <search term> keyword
    Then I see the 'No Results Found' message

    Examples:
      | search term |
      | wrong-keywords |

  Scenario Outline: Reset search term
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When Enter <search term>
    And Click reset icon
    Then I see the search term cleared in search box

    Examples:
      | search term |
      | Creo |

  Scenario Outline: Search tutorials by search term and check tutorial details
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I search tutorials by <search term> keyword
    Then I see the search results based on <search term> keyword
    And I see the title, description, product family and duration for each result

    Examples:
      | search term |
      | Creo |

  Scenario Outline: Filter search result based on Product Family
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I search tutorials by <search term> keyword
    Then I see the search results based on <search term> keyword
    When I filter tutorials by product family
    Then I see the filtered results based on product family
    And I see the results based on family selection

    Examples:
      | search term |
      | Creo |

  Scenario Outline: Filter search result based on Product Family and Product Name
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I search tutorials by <search term> keyword
    Then I see the search results based on <search term> keyword
    When I filter tutorials by product family
    Then I see the results based on family selection
    When I filter tutorials by product name
    Then I see the results based on product name selection
    And I see the filtered results based on product family and product name

    Examples:
      | search term |
      | Creo |

  Scenario Outline: Filter search result based on Product Family, Product Name & Product Version
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I search tutorials by <search term> keyword
    Then I see the search results based on <search term> keyword
    When I filter tutorials by product family
    Then I see the results based on family selection
    When I filter tutorials by product name
    Then I see the results based on product name selection
    When I filter tutorials by product release
    Then I see the results based on product release selection
    And I see the filtered results based on product family, product name and product version

    Examples:
      | search term |
      | Creo |

  Scenario Outline: Search result based on Language change
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I search tutorials by <search term> keyword
    Then I see the search results based on <search term> keyword
    When I change language
    Then I see search results based on language change

     Examples:
      | search term |
      | Creo |

  Scenario Outline: Search result pagination
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I search tutorials by <search term> keyword
    Then I see the search results based on <search term> keyword
    When I try the pagination
    Then I land on the another page
    And I see the title, description, product family and duration for each result

    Examples:
      | search term |
      | Creo |

  Scenario Outline: Search result url sharable
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I search tutorials by <search term> keyword
    Then I see the search results based on <search term> keyword
    When I filter tutorials by product family
    And I filter tutorials by product name
    And I filter tutorials by product release
    And I share the URL
    Then I see search results based on shared url

    Examples:
      | search term |
      | Creo |

  Scenario Outline: Bread crumbs selection takes to the respective results
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I search tutorials by <search term> keyword
    Then I see the search results based on <search term> keyword
    When I filter tutorials by product family
    Then I see the results based on family selection
    When I filter tutorials by product name
    Then I see the results based on product name selection
    When I filter tutorials by product release
    Then I see the results based on product release selection
    And I see the filtered results based on product family, product name and product version
    When I click on the bread crumbs
    Then I see the results based on the bread crumb selected
    And I see the search results based on <search term> keyword

  Examples:
  | search term |
  | Creo |