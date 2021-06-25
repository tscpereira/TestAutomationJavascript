import { Given, When, Then } from '@cucumber/cucumber';
import GooglePage from '../pageobjects/google.page';

const pages = {
    google: GooglePage
}

Given(/^I access the page (.*)$/, async (url) => {
    await pages.google.open(url)
});

When(/^I search by (.*)$/, async (searchby) => {
    await pages.google.search(searchby)
});

Then(/^I found the result$/, async () => {
    await expect(pages.google.resultLink).toBeDisplayed();
});
