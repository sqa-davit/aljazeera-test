const { I } = inject();

module.exports = {
  locators: {
    player: "//video-js", 
    switchPlayerButton: "(//button[@id='liveStreamPlayerHelpButton'])[1]" //it's not good solution
  },

  seePlayer() {
    I.seeElement(this.locators.player);
  },

  // hard code is not good solution 
  // we can have all texts from front-end project

  seeSwitchPlayerButton() {
    I.seeElement(locate(this.locators.switchPlayerButton).withText('Switch Player')); 
  }
};
