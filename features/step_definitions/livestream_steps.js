const { I, LivePage } = inject();

Given('I am on the Al Jazeera Live page', () => {
  I.amOnPage('/live');
});

Then('the Livestream Player should be visible', () => {
  LivePage.seePlayer();
});

Then('the Switch Player button should be visible', () => {
  LivePage.seeSwitchPlayerButton();
});
