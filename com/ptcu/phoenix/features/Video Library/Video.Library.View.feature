Feature: Video Library: View
  As a consumer of the tutorial
  I should be able to view and use all the features of the tutorial

  Scenario: View all the features on the Video Library view page
    Given I go to PTCU site
    When I browse Video Library tab
    Then I see the Video Library home page
    When I browse Video Library by product family
    When I select a tutorial to view
    Then I land on Video Library view page
    Then I see the bread crumbs
    Then I see the title of the tutorial
    Then I see the Product Name, tutorial type and the tutorial author
    Then I see the tutorial Video, text and images
#    Then I see the duration of the tutorial

  Scenario: Bread-crumbs on the Video Library view page should be clickable
    Given I go to PTCU site
    When I land on a particular tutorial view page
    And I see the bread crumbs
    And I click on the version in the bread crumbs
    Then I land on the tutorials landing page with the previous version selected
    When I land on a particular tutorial view page
    And I see the bread crumbs
    And I click on the product in the bread crumbs
    Then I land on the tutorials landing page with the previous product selected
    When I land on a particular tutorial view page
    And I see the bread crumbs
    And I click on the family in the bread crumbs
    Then I land on the tutorials landing page with the previous family selected

# To be developed
# Scenario: View images on the tutorial view page
#    Given I land on tutorial view page
#    When I click on any image in the tutorial view page
#    Then The image should open in the image gallery
#    And I should be able to move across the image gallery
#    And I should be able to close the image gallery

# TBD
# Scenario: Share the URL of the tutorial view page
#    Given I land on the tutorial view page
#    Then I see the title slug of the tutorial in the URL
#    When I copy the URL and open it elsewhere
#    Then I land on the tutorial view page