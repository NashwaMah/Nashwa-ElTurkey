require('dotenv').config()
import { t, Selector, ClientFunction } from 'testcafe'
import Selectors from '../../test-helpers/selectors/duckduckgo_selectors.json'


class SearchResults {

  constructor() {

    this.search_results= Selector(Selectors.searchResultslinks)
    this.search_input=Selector(Selectors.searchInputInResults)
    this.search_correctness_message= Selector(Selectors.correctnessDiv)
    this.suggestion_message= Selector(Selectors.suggestionMessage)
    }
  
    async CheckSearchResults(search_keyword)
    {
      for ( var i=0 ; i < await this.search_results.count ; i++)
      {
         await t.expect((await this.search_results.nth(i).innerText).toLowerCase()).contains(search_keyword.toLowerCase())
         console.log(await this.search_results.nth(i).innerText +" contains  "+ search_keyword.toLowerCase())
      }

    }

    async OpenFirstLinkResult()
    {
      await t.click(this.search_results(0))
    }

    async ClickReturnInBrowser()
    {
      const goBack = ClientFunction(() => window.history.back());
      await goBack();

    }
    async CheckSearchKeywordStillExist(search_keyword)
    {
      console.log(await this.search_input.value)
       await t.expect(await this.search_input.value).eql(search_keyword)
       await this.CheckSearchResults(search_keyword)
    }

    async CheckCorrectnessMessage(correct_message)
    {
      await t.expect(await this.search_correctness_message.exists).eql(true)
      await t.expect (await this.suggestion_message.withText(correct_message).exists).eql(true)

    }

    async CheckNotFound()
    {
      await t.expect(this.search_results.exists).eql(true)
    }
}

export default SearchResults


