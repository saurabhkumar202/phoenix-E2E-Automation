Feature: Verify Course enrollment on the PTC University
  As a new user of PTC University
  I should be able to enroll a free course on PTC University

  Scenario: Enrollment of a free course
   Given I go to IoTU portal
    When he login to IoTU portal
    And I enroll for a free course
    Then I should be able to see it in My Learning