const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  // tests: './specs/**/*.spec.js',
  tests: './features/**/*.feature',
  output: './output',
  plugins: {
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
    },
  },
  helpers: {
    WebDriver: {
      url: 'https://aljazeera.com',
      browser: 'chromium',
      show: true,
    },
    AssertWrapper: {
      "require": "codeceptjs-assert"
    }

  },
  include: {
    I: './steps_file.js',
    HomePage: './pages/HomePage.js',
    LivePage: './pages/LivePage.js'
  },
  name: 'aljazeera-test',
  gherkin: {
    features: './features/**/*.feature',
    steps: [
      './features/step_definitions/mostRead_steps.js',
      './features/step_definitions/livestream_steps.js'
    ]
  },
};