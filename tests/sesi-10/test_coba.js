const { Builder, By } = require('selenium-webdriver');
const { Select } = require('selenium-webdriver/lib/select');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');

describe('SauceDemo - Sort Z ke A (Minimal)', function () {
    let driver;

    // 🔹 Hook BEFORE: dijalankan sekali sebelum semua test
    before(async function () {
    console.log('🔥 BEFORE: buka browser');
    const options = new chrome.Options();
    options.addArguments('--start-maximized');

    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    });

    // 🔹 Hook AFTER: dijalankan sekali setelah semua test
    after(async function () {
        console.log('🔥 AFTER: tutup browser');
        await driver.quit();
    });


    it('Login dan sort produk Z ke A', async function () {
        await driver.get('https://www.saucedemo.com');

        // Login
        await driver.findElement(By.css('[data-test="username"]'))
            .sendKeys('standard_user');
        await driver.findElement(By.css('[data-test="password"]'))
            .sendKeys('secret_sauce');
        await driver.findElement(By.css('[data-test="login-button"]'))
            .click();

        // Sort Z-A (PASTI STABIL)
        const dropdown = await driver.findElement(
            By.className('product_sort_container')
        );
        const select = new Select(dropdown);
        await select.selectByValue('za');

        // Ambil semua nama produk
        const items = await driver.findElements(
            By.className('inventory_item_name')
        );

        const names = [];
        for (let item of items) {
            names.push(await item.getText());
        }

        // Validasi Z-A
        const sortedDesc = [...names].sort((a, b) => b.localeCompare(a));
        assert.deepStrictEqual(names, sortedDesc);
    });

});
