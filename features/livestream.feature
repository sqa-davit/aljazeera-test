Feature: Validation of Livestream Player on Al Jazeera Live Page

    Background:
        Given I am on the Al Jazeera Live page

    @desktop
    Scenario: Validate Player is visible in Livestream Player
        Then the Livestream Player should be visible

    @desktop
    Scenario: Validate Switch Player button is visible in Livestream Player
        Then the Switch Player button should be visible
