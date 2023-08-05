Feature: Header and Footer Links

  @Header
  Scenario: Browse using 'Free Training' in header.
    Given I go to PTCU site
    When I browse 'Training' from the header
    Then I should go to training page

  Scenario: Browse using 'For Enterprise' in header.
    Given I go to PTCU site
    When I browse 'Pricing' from the header
    Then I should go to Enterprise training page

  Scenario: Browse using 'About' in header.
    Given I go to PTCU site
    When I browse 'About' from the header
    Then I should go to About us page of PTCU

  @skip
  Scenario: Browse using 'Blog' in header.
    Given I go to PTCU site
    When I browse 'Blog' from the header
    Then I should go to Blog application of PTCU
    Then I go to PTCU site


  @Footer @PTCU
  Scenario: Browse using 'Free Course' in footer.
    Given I go to PTCU site
    When I browse 'Free Course' from the footer
    Then I should go to catalog page

  Scenario: Browse using 'Free Tutorials' in footer.
    Given I go to PTCU site
    When I browse 'Tutorials' from the footer
    Then I should go to tutorials page

  Scenario: Browse using 'For Enterprise' in footer.
    Given I go to PTCU site
    When I browse 'For Enterprise' from the footer
    Then I should go to Enterprise training page

  Scenario: Browse using 'About' in footer.
    Given I go to PTCU site
    When I browse 'About' from the footer
    Then I should go to About us page of PTCU

  @skip
  Scenario: Browse using 'Blog' in footer.
    Given I go to PTCU site
    When I browse 'Blog' from the footer
    Then I should go to Blog application of PTCU
    Then I go to PTCU site

  @Footer @Enterprise
  #Scenario: Browse using eLearning Libraries in Enterprise section of footer.
   # Given I go to PTCU site
    #When I sign in
    #When I browse 'eLearning Libraries' from the footer
    #Then I should go to PLMS page

  Scenario: Browse using Instructor-Led Training in Enterprise section of footer.
    Given I go to PTCU site
    When I browse 'Instructor-Led Training' from the footer
    Then I should go to Find a Training Page on the support site of PTC

  Scenario: Browse using MakerLabs in Enterprise section of footer.
    Given I go to PTCU site
    When I browse 'MakerLabs' from the footer
    Then I should go to Talk to a Training Advisor page of PTC site

  Scenario: Browse using Specializations in Enterprise section of footer.
    Given I go to PTCU site
    When I browse 'Specializations' from the footer
    Then I should go to specialization page of PTCU

  Scenario: Browse using Learning Services in Enterprise section of footer.
    Given I go to PTCU site
    When I browse 'Learning Services' from the footer
    Then I should go to learning services page of PTC site

  @Footer @Help
 #Scenario: Browse using Forum in Help section of footer.
    # Given I go to PTCU site
    # When I browse 'Forum' from the footer
    #Then I should go to forum homepage

    #comment out above scenario because there is only production instance of forum and it will this test data into prod analytics.

  Scenario: Browse using Support in Help section of footer.
    Given I go to PTCU site
    When I browse 'Support' from the footer
    Then I should go to overview section of help page

  Scenario: Browse using Resources in Help section of footer.
    Given I go to PTCU site
    When I browse 'Resources' from the footer
    Then I should go to resources page

  Scenario: Browse using Whats's New in Help section of footer.
    Given I go to PTCU site
    When I browse 'What's New' from the footer
    Then I should see the Whats New modal

  Scenario: Browse using Contact Us New in Help section of footer.
    Given I go to PTCU site
    When I browse Contact Us from the footer
    Then I should go to the contact us section of help page

  @Footer @PrivacyPolicy @TermsOfUse
  Scenario: Browse using Privacy Policy in footer.
    Given I go to PTCU site
    When I browse 'Privacy Policy' from the footer
    Then I should go to a privacy policy page of PTC site

  Scenario: Browse using Terms Of Use in footer.
    Given I go to PTCU site
    When I browse 'Terms of Use' from the footer
    Then I should go to Terms of Use section of help page

