Feature: Pricing
  As an end user
  I should be able to view all the features in the Pricing page

  Scenario: Land on the "Pricing" page from the header and the footer
    Given I go to PTCU site
    When I go to Pricing from the header
    Then I land on the Pricing page without login
    When I go to PTCU site
    Then I go to Pricing from the footer
    Then I land on the Pricing page without login

  Scenario: View the "PTC University Offerings" section without login
    Given I go to PTCU site
    When I go to Pricing from the header
    Then I see the 'PTC University Offerings' text, its description and the 'View Offerings' link
    When I go to the 'View Offerings' link
    Then I see the 'What We Offer' table

  Scenario Outline: View the Marketing section with all its marketing points
    Given I go to PTCU site
    When I go to Pricing from the header
    Then I see the marketing section text and its description
    Then I see the marketing point blocks with its <Image>, <Title> and <Description>
    Examples:
      | Image                                 | Title               | Description                                                                |
      | assets/images/speed-up-onboarding.svg | Speed Up Onboarding | Get your team ready to build solutions with PTC products.                  |
      | assets/images/deepen-expertise.svg    | Deepen Expertise    | Develop new approaches and skills with role-based offerings.               |
      | assets/images/stay-current.svg        | Stay Current        | Ensure your team is up-to-date with the latest use cases and technologies. |

#  Todo
#  Scenario Outline: View the 'What We Offer' section with all its contents
#    Given I go to PTCU site
#    When I go to Pricing from the header
#    Then I see the 'What We Offer' table
#    Then I see the <Items> available in <Public>, <PTC Software Subscription> and <PTC Partners>
#    Examples:
#      | Items                                                 | Public                        | PTC Software Subscription                         | PTC Partners                  |
#      | Video Library                                         | icon-checkmark               | icon-checkmark                                    | icon-checkmark                |
#      | Free Public Courses                                   | icon-checkmark                | icon-checkmark                                    | icon-checkmark                |
#      | eLearning Libraries                                   |                               | icon-checkmark                                    | icon-checkmark                |
#      | Customizable eLearning Libraries                      |                               | Request a quote                                   | Request a quote               |
#      | In-Center Training                                    | Starting at $518/day per user | Starting at $518/day per user                     | Starting at $518/day per user |
#      | Onsite Training Class                                 |                               | Starting at$2,380/day per group                   | Request a quote               |
#      | MakerLabs                                             |                               | $6,000/participant for two weeks virtual training | Request a quote               |
#      | Individual Specialization Pathway w/ Online Mentoring | $500/user                     | $500/user                                         | Credits                       |
#      | Group Specialization Pathway w/ Live Expert Sessions  |                               | $7,140/group                                      | Request a quote               |
#      | Learning Services & Programs                          |                               | Request a quote                                   | Request a quote               |
#    Then I see the 'View Catalog' and the 'Contact Us' link below the 'What We Offer' table
#    When I go to the 'View Catalog' link below the 'What We Offer' section
#    Then I land on the 'Free Online Courses' page in the same tab
#    When I go to PTCU site
#    Then I go to the 'Contact Us' link below the 'What We Offer' section
#    Then I land on the 'PTC Contact Us' page on the new tab

  Scenario Outline: View and validate the Elearning block in "About Our Offerings"
    Given I go to PTCU site
    When I go to Pricing from the header
    Then I see the "About Our Offerings" section
    Then I see the block1 <Block Title> and the link1 <Block Link>
    Examples:
      | Block Title          | Block Link                       |
      | Enterprise eLearning | https://enterprise-uat.ptcu.com/ |

  Scenario Outline: View and validate the Instructor-Led Training block in "About Our Offerings"
    Given I go to PTCU site
    When I go to Pricing from the header
    Then I see the "About Our Offerings" section
    Then I see the block2 <Block Title> and the link2 <Block Link>
    When I click on the block2 <Block Title>
    Then I land on the link2 <Block Link>
    Examples:
      | Block Title             | Block Link                                                        |
      | Instructor-Led Training | https://supporttest.ptc.com/apps/ext/training/search.jsp?product= |

  Scenario Outline: View and validate the MakerLabs block in "About Our Offerings"
    Given I go to PTCU site
    When I go to Pricing from the header
    Then I see the "About Our Offerings" section
    Then I see the block3 <Block Title> and the link3 <Block Link>
    When I click on the block3 <Block Title>
    Then I land on the link3 <Block Link>
    Examples:
      | Block Title             | Block Link                                                        |
      | MakerLabs for IoT & AR                | https://www.ptc.com/en/education/contact-us?                      |

  Scenario Outline: View and validate the TWX specialization block in "About Our Offerings"
    Given I go to PTCU site
    When I go to Pricing from the header
    Then I see the "About Our Offerings" section
    Then I see the block4 <Block Title> and the link4 <Block Link>
    When I click on the block4 <Block Title>
    Then I land on the link4 <Block Link>
    Examples:
      | Block Title             | Block Link                                                        |
      | ThingWorx Specialization              | /enrollment/specialization/thingworx-iot-developer-specialization |

  Scenario Outline: View and validate the Learning Services block in "About Our Offerings"
    Given I go to PTCU site
    When I go to Pricing from the header
    Then I see the "About Our Offerings" section
    Then I see the block5 <Block Title> and the link5 <Block Link>
    When I click on the block5 <Block Title>
    Then I land on the link5 <Block Link>
    Examples:
      | Block Title             | Block Link                                                        |
      | Learning Services                     | https://www.ptc.com/en/education/learning-services                |

  Scenario Outline: View and validate the Need Help block in "About Our Offerings"
    Given I go to PTCU site
    When I go to Pricing from the header
    Then I see the "About Our Offerings" section
    Then I see the block6 <Block Title> and the link6 <Block Link>
    When I click on the block6 <Block Title>
    Then I land on the link6 <Block Link>
    Examples:
      | Block Title             | Block Link                                                        |
      | Need help finding the right training? | https://www.ptc.com/en/education/contact-us?                      |