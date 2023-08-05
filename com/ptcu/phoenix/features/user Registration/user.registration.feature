Feature: Verify user registration on the PTC university
  As a new user of PTC University
  I should be able to register/signup with PTC University

  Scenario: Registration on PTC University
    Given I go to IoTU portal
    When I register on PTC Portal with valid data
    Then I should be able to register successfully