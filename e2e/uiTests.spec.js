describe('Moonwalk smoke verification', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  // UI TESTS

  // Check for dashboard header
  it('Dashboard title is "Next launch"', async () => {
    // Close storage anoying notification
    await element(by.text('Dismiss All')).tap();

    await expect(element(by.id('screenTitle'))).toHaveText('Next launch');

  });

  // Launch card verification: header, rocket name and time
  it('Dashboard launch card verification', async () => {
    // Close storage anoying notification
    await element(by.text('Dismiss All')).tap();

    // Tap on launch card
    await element(by.id('dashboardLaunchCard')).tap();

    // Check header
    await expect(element(by.id('launchCardHeader'))).toHaveText('Launch Details');

    // Check rocket name
    await expect(element(by.id('launchCardRocketName'))).toHaveText('Kuaizhou-1A');

    // Check time is present
    await expect(element(by.id('launchCardTime'))).toBeVisible();

    // Move back from launch card
    await element(by.id('launchCardBackButton')).tap();

    // To make sure that we are back to dashboard screen
    await expect(element(by.id('screenTitle'))).toHaveText('Next launch');

  });

  // Verify calendar tab
  it('Calendar tab verification', async () => {
    // Close storage anoying notification
    await element(by.text('Dismiss All')).tap();

    // Open calendar tab
    await element(by.label('Calendar')).tap();

    // Scroll to bottom
    await element(by.id('scrollView')).scrollTo('bottom');

    // Load more cards
    await element(by.text('Load more')).tap();

    // Scroll to bottom
    await element(by.id('scrollView')).scrollTo('bottom');

  });

  // Verify news tab
  it('News tab verification', async () => {
    // Close storage anoying notification
    await element(by.text('Dismiss All')).tap();

    // Open calendar tab
    await element(by.label('News')).tap();

  });

  // Verify settings tab
  it('Settings tab verification', async () => {
    // Close storage anoying notification
    await element(by.text('Dismiss All')).tap();

    // Open calendar tab
    await element(by.label('Settings')).tap();

  });

});
