@skip
Feature: Verify Course viewer on the PTC University
  As an enrolled user of PTC University
  I should be able to traverse a course using course viewer

  Scenario: Course viewer Traversal of a course
    Given I go to IoTU portal
    When he login to IoTU portal
    When he launch an enrolled course from My Learning Active course list
    Then he should be able to traverse and complete it
    And he should be able to see it in My Learning completed course list
