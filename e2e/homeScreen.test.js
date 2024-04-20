describe('Home Screen', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    // it('should have welcome screen', async () => {
    //     await expect(element(by.id('welcome'))).toBeVisible();
    // });
    //
    // it('should show hello screen after tap', async () => {
    //     await element(by.id('hello_button')).tap();
    //     await expect(element(by.text('Hello!!!'))).toBeVisible();
    // });
    //
    // it('should show world screen after tap', async () => {
    //     await element(by.id('world_button')).tap();
    //     await expect(element(by.text('World!!!'))).toBeVisible();
    // });

    it('"Click me" button should be visible', async () => {
        await expect(element(by.id('click-me-button'))).toBeVisible();
    });

    it('shows "Hi!" after tapping "Click me"', async () => {
        await element(by.id('click-me-button')).tap();
        await expect(element(by.text('Hi!'))).toBeVisible();
    });

})