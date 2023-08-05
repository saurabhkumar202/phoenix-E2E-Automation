Feature: Free Courses
  As a consumer of the courses
  I should be able to view and use all the features of the course

  Scenario: View all the features on the Catalog page
    Given I go to PTCU site
    When I browse 'Free Course' from the footer
    Then I should go to catalog page
    Then I should see the "Free Online Courses" page title in the banner

  Scenario Outline: See the course image, title and level in the thumbnail
    Then I should see the <Course image>, <Course title> and <Course level> in the course thumbnail

    Examples:
      | Course image | Course title                                       | Course level |
      | true         | Fundamentals of AR Development with Vuforia Studio | Beginner     |
      | true         | Creo Parametric Design Fundamentals                | Beginner     |
      | true         | Unpacking the Internet of Things                   | Beginner     |
      | true         | A Simple Framework for Designing IoT Products      | Beginner     |
      | true         | New Business Markets in the Internet of Things     | Beginner     |
      | true         | Fundamentals of IoT Development with ThingWorx     | Beginner     |
      | true         | IoT Modeling with ThingWorx                        | Beginner     |
      | true         | IoT UI Development with ThingWorx                  | Beginner     |
      | true         | IoT Connectivity with ThingWorx                    | Beginner     |
      | true         | Fundamentals of KEPServerEX                        | Beginner     |
      | true         | OPC Connectivity with KEPServerEX                  | Beginner     |
      | true         | Client Connectivity and Tunneling with KEPServerEX | Beginner     |
      | true         | KEPServerEX Key Components and Diagnostics         | Beginner     |
      | true         | KEPServerEX Optimizations and Configuration API    | Beginner     |