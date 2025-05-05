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

   async useBypassBlock() {
        // Replace with actual selector for the accessibility skip link
        console.log("startinggggggggggggg")
        I.wait(7);
        I.click("//div[contains(@class,'container--header')]");
        I.wait(1);
        I.click("//div[contains(@class,'container--header')]");
       
        const webDriverHelper = codeceptjs.container.helpers('WebDriver');
        const browser = webDriverHelper.browser;
        I.wait(4);
        
        await browser.keys('Tab')
        I.wait(1);
        await browser.keys('Tab')
        I.wait(1);
        // await browser.keys('Tab')
        // await browser.keys('Tab')
        // await browser.keys('Tab')
        // await browser.keys('Tab')
        // await browser.keys('Tab')
    },

    sectionShouldBeFocused(section) {
        I.seeInCurrentUrl('#most-read'); // or verify scrolling/focus
    }
};
