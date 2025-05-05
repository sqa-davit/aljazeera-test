const { I } = inject();

module.exports = {
    sectionSelector: {
        'Most Read': "//aside[@id='most-read-container']"
    },

    seeSection(section) {
        I.seeElement(this.sectionSelector[section]);
    },

    dontSeeSection(section) {
        I.dontSeeElement(this.sectionSelector[section]);
    },

    async sectionShouldContainPosts(section, expectedCount) {
        const selector = this.sectionSelector[section] + '//li';
        const elements = await I.grabNumberOfVisibleElements(selector);
        I.assertEqual(elements, expectedCount);
    },

    async selectBypassOption(optionLinkName) {
        const webDriverHelper = codeceptjs.container.helpers('WebDriver');
        const browser = webDriverHelper.browser;

        const tabMap = {
            'Featured Content': 1,
            'Content Feed': 2,
            'Most Read': 3
        };

        if (!(optionLinkName in tabMap)) {
            throw new Error(`Invalid ByPass link option: ${optionLinkName}. Expected one of: ${Object.keys(tabMap).join(', ')}`);
        }
        const tabCount = tabMap[optionLinkName];

        for (let i = 0; i < tabCount; i++) { 
            await browser.keys('Tab');
        }
        I.wait(5000); // bad solution for hard waiting
        I.click(`(//a[contains(@class,'bypass-block-link')])[${tabCount}]`);
    },

    async useBypassBlock(optionLinkName) {
        I.click(".bypass-block-links-container");
        I.wait(1);  // bad solution for hard waiting
        await this.selectBypassOption(optionLinkName);
        I.wait(15); // bad solution for hard waiting
    },

    sectionShouldBeFocused(section) {
        I.seeInCurrentUrl('#most-read'); // or verify scrolling/focus
    }
};
