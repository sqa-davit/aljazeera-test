Feature: Validation of 'Most Read' section on Al Jazeera homepage

  Background:
    Given I am on the Al Jazeera homepage

  # @desktop
  # Scenario: Verify 'Most Read' section appears on Desktop
  #   Given I am using a Desktop viewport
  #   Then the "Most Read" section should be visible

  # @desktop
  # Scenario: Verify 'Most Read' section has 10 posts on Desktop
  #   Given I am using a Desktop viewport
  #   Then the "Most Read" section should contain 10 posts

  # @mobile
  # Scenario: Verify 'Most Read' section does not appear on Mobile
  #   Given I am using a Mobile viewport
  #   Then the "Most Read" section should not be visible

  @desktop @accessibility
  Scenario: Verify bypass block menu item for 'Most Read' is functional
    Given I am using a Desktop viewport
    When I select "Most Read" option
    # Then I should be navigated to the "Most Read" section