Feature: Learning Paths
  As an end user
  I should be able to view all the LPs listed
  on the learning path landing page

  Scenario: Land on the learning paths page from Header and Footer
    Given I go to PTCU site
    When I go to 'Learning Paths' from the 'Training' section in the header
    Then I land on the learning paths page, view all the LPs available without login
    When I go to IoTU portal
    When I go to 'Learning Paths' from the footer
    Then I land on the learning paths page, view all the LPs available without login

  Scenario Outline: View all the Learning Paths available
    Then I see the title <LP's title> and its respective image <Image thumbnails>
    Examples:
      | LP's title                    | Image thumbnails                   |
      | IoT Business Specialist       | IoT_Business_Specialist.png        |
      | ThingWorx IoT Developer       | Thingworx_IoT_Dev.png              |
      | Vuforia Studio Author         | Vuforia_Studio_AR_Author2.png      |
      | Kepware Connectivity Engineer | Kepware_Connectivity_Engineer.png  |
      | Creo Designer                 | Creo_Designer.png                  |
      | Creo Analytics Engineer       | Creo_Analytics_Engineer.png        |
      | Windchill Product Manager     | Windchill_Product_Manager.png      |
      | Windchill Administrator       | Windchill_Administrator%20.png       |
      | Windchill Quality Engineer    | Windchill_Quality_Engineer_Ver.png |
      | Windchill Quality Engineer    | Windchill_Quality_Engineer_Ver.png |