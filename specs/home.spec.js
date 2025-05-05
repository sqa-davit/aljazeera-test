Feature('login');

Scenario('login test', ({ I }) => {
  I.amOnPage('/');
  I.fillField("//input[@data-testid='royal-email']", 'john');
  I.wait(4)
});