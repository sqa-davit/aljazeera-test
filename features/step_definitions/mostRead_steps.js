const { I, HomePage } = inject();

Given('I am on the Al Jazeera homepage', () => {
    I.amOnPage('/');
});

Given('I am using a Desktop viewport', () => {
    I.resizeWindow(1920, 1080);
});

Given('I am using a Mobile viewport', () => {
    I.resizeWindow(375, 812); // iPhone X dimensions
});

Then('the {string} section should be visible', (section) => {
    HomePage.seeSection(section);
});

Then('the {string} section should not be visible', (section) => {
    HomePage.dontSeeSection(section);
});

Then('the {string} section should contain {int} posts', async (section, count) => {
    await HomePage.sectionShouldContainPosts(section, count);
});

When('I select {string} option', async (optionLinkName) => {
    await HomePage.useBypassBlock(optionLinkName);
});

Then('I should be navigated to the {string} page', (section) => {
    HomePage.sectionShouldBeFocused(section);
});