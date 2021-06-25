import Page from './page';

class GooglePage extends Page {

    get searchField () { return $('input[name="q"]') }
    get resultLink  () { return $('div[id="result-stats"]') }

    async search (searchby) {
        await (await this.searchField).setValue(searchby);
        browser.keys("\uE007");
    }

    open (url) {
        super.open(url);
    }
}

export default new GooglePage();
