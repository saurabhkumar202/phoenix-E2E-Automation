Feature: Video Library: Discover
  As a consumer of the Video Library
  I should be able to discover and view all the video libraries based on popular and recent

  Scenario: Land on Video Library view page from "Featured Videos" Video Library lane
    Given I go to IoTU portal
    When I browse Video Library tab
    Then I see the Video Library home page
    Then I see "Featured Videos" title
    Then I see "Featured Videos" carousal with 4 video libraries
    When I open any tutorial from "Featured Videos" page
    Then I land on Video Library view page

  Scenario: Land on Video Library view page from "Popular this week" Video Library lane
    Given I go to IoTU portal
    When I browse Video Library tab
    And I see the Video Library home page
    Then I see "Popular this week" title
    And I see "Popular this week" carousal with 4 video libraries
    When I open any tutorial from "Popular this week" page
    Then I land on Video Library view page

  Scenario: Land on tutorial view page from "Recently added" Video Library lane
    Given I go to IoTU portal
    When I browse Video Library tab
    And I see the Video Library home page
    Then I see "Recently added" title
    And I see "Recently added" carousal with 4 video libraries
    When I open any tutorial from "Recently added" page
    Then I land on Video Library view page