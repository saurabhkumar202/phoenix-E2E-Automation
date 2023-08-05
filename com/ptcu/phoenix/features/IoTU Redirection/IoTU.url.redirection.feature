@skip
Feature: Iotu url Redirection test
  As a user of IoTU I can now redirect to PTCU

  @skip
  Scenario Outline: URL redirection for <source_URL> to <target_URL>
    Given I go to old IoTU site
    When I am browsing <source_URL>
    Then I should redirect to <target_URL>

    Examples:
      | source_URL                    | target_URL                    |
      | http://localhost:8090/catalog | http://localhost:8090/catalog |
      | http://localhost:8090/login   | http://localhost:8090/login   |


  Scenario Outline: URL redirection for <source_URL> to <target_URL>
    Given I go to old IoTU site
    When I sign in
    When I am browsing <source_URL>
    Then I should redirect to <target_URL>
    And HTTP code should be 301 for <source_URL>
    And HTTP code should be 200 for <target_URL>
    And I should be able to sign out

    Examples:
      | source_URL                                                                       | target_URL                                                                       |
      | https://test.iotu.com/my-learning                                                | https://test.ptcu.com/my-learning                                                |
      | https://test.iotu.com/course/milestones/student/unpacking-the-internet-of-things | https://test.ptcu.com/course/milestones/student/unpacking-the-internet-of-things |
      | https://test.iotu.com/course/overview/student/unpacking-the-internet-of-things   | https://test.ptcu.com/course/overview/student/unpacking-the-internet-of-things   |
      | https://test.iotu.com/achievements                                               | https://test.ptcu.com/achievements                                               |
      | https://test.iotu.com/profile-setting                                            | https://test.ptcu.com/profile-setting                                            |
      | https://test.iotu.com/site-admin/course-approvals                                | https://test.ptcu.com/site-admin/course-approvals                                |
      | https://test.iotu.com/course                                                     | https://test.ptcu.com/course                                                     |
      | https://test.iotu.com/mentor                                                     | https://test.ptcu.com/mentor                                                     |
      #| https://test.iotu.com/site-analytics                                             | https://test.ptcu.com/site-analytics                                             |
      | https://test.iotu.com/rights-admin                                               | https://test.ptcu.com/rights-admin                                               |
     # | https://test.iotu.com/site-admin/user-permission                                 | https://test.ptcu.com/site-admin/user-permission                                 |
      | https://test.iotu.com/site-admin/course-public                                   | https://test.ptcu.com/site-admin/course-public                                   |
      | https://test.iotu.com/site-admin/course-ordering                                 | https://test.ptcu.com/site-admin/course-ordering                                 |

  Scenario Outline: URL redirection for <source_URL> to <target_URL>
    Given I go to old IoTU site
    When I am browsing <source_URL>
    Then I should redirect to <target_URL>
    And HTTP code should be 301 for <source_URL>
    And HTTP code should be 200 for <target_URL>

    Examples:
      | source_URL                            | target_URL                            |
      | https://test.iotu.com/                | https://test.ptcu.com/                |
      | https://test.iotu.com/catalog         | https://test.ptcu.com/catalog         |
      | https://test.iotu.com/enterprise      | https://test.ptcu.com/enterprise      |
      | https://test.iotu.com/about-us        | https://test.ptcu.com/about-us        |
      | https://test.iotu.com/login           | https://test.ptcu.com/login           |
      | https://test.iotu.com/sign-up         | https://test.ptcu.com/sign-up         |
      | https://test.iotu.com/forgot-password | https://test.ptcu.com/forgot-password |
#     |https://forum-test.iotu.com|https://forum-test.ptcu.com|

