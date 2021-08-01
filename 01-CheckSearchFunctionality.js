require('dotenv').config()
import DuckduckgoHomePage from '../models/pages/home_page.js'
import DuckduckgoSearchResultsPage from '../models/pages/search_results.js'
const search_criteria = require('../test-helpers/test-data/search_criteria.js')
const search_criteria_dataset = JSON.parse(JSON.stringify(search_criteria.search))
const duckduckgo_homepage = new DuckduckgoHomePage()
const duckduckgo_searchResultpage = new DuckduckgoSearchResultsPage()


fixture`Open Duckduckgo And  Start Search `
    .page`${process.env.duckduckgoURL}`

search_criteria_dataset.forEach(search_input => {
    test(' -----  Add search Criteria and check search hints -----', async t => {

        await duckduckgo_homepage.SearchUsingSearchHints(search_input)
    });
});

search_criteria_dataset.forEach(search_input => {
    test(' -----  Add search input and check results  -----', async t => {

        await duckduckgo_homepage.SearchUsingSearchButton(search_input)
        await duckduckgo_searchResultpage.CheckSearchResults(search_input)

    });
});

test('------ Open Result Link and return page to Search Page ----------', async t => {

    await duckduckgo_homepage.SearchUsingSearchButton(search_criteria_dataset[1])
    await duckduckgo_searchResultpage.OpenFirstLinkResult()
    await duckduckgo_searchResultpage.ClickReturnInBrowser()
    await duckduckgo_searchResultpage.CheckSearchKeywordStillExist(search_criteria_dataset[1])

});

test('------ Search with Wrong Spelling and check correctness suggestions  ----------', async t => {

    await duckduckgo_homepage.SearchUsingSearchButton(search_criteria.wrongsearch)
    await duckduckgo_searchResultpage.CheckCorrectnessMessage(search_criteria.correctmessage)

});

test ('----- Check search with % not giving 404 error ', async t => {

    await duckduckgo_homepage.SearchUsingSearchButton("%")
    await duckduckgo_searchResultpage.CheckNotFound()
});