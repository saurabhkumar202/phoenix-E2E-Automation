Feature: Training page

  Scenario: Browse using 'Training' and verify landing page content.
    Given I go to PTCU site
    When I browse 'Training' from the header
    Then I should go to training page
    Then I should see the page title as "Training with How-to Videos, Courses, and Learning Paths | PTC University"
    Then I should see the "Training" page heading
    Then I should see the "The training you need to turn possibility into reality" on description
    Then I should see 4 offerings
    Then I should see training features and its details

  Scenario: Browsing Enterprise training details from 'Training' landing page.
    Given I go to PTCU site
    When I browse 'Training' from the header
    Then I should go to training page
    Then I should see Enterprise Training banner in the bottom
    When I click on Enterprise Training banner in the bottom
    Then I should go to pricing details page

  Scenario: Browsing  PTCU courses catalog  from 'Training' landing page.
    Given I go to PTCU site
    When I browse 'Training' from the header
    Then I should go to training page
    Then I should see Free Courses block.
    When I click on Free Courses block
    Then I should go to catalog page

  Scenario: Browsing enterprise e-learning details from 'Training' landing page.
    Given I go to PTCU site
    When I browse 'Training' from the header
    Then I should go to training page
    Then I should see Enterprise e-Learning block
#    When I click on  Enterprise e-Learning block
#    Then I should go to Enterprise e-Learning

  Scenario: Browsing learning path details from 'Training' landing page.
    Given I go to PTCU site
    When I browse 'Training' from the header
    Then I should go to training page
    Then I should see Learning Paths block
    When I click on Learning Paths block
    Then I should go to Learning path details

  Scenario: Browsing free tutorials details from 'Training' landing page.
    Given I go to PTCU site
    When I browse 'Training' from the header
    Then I should go to training page
    Then I should see Video Library block.
    When I click on Video Library block
    Then I should go to Video Library