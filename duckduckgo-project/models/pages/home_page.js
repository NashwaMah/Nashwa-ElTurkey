require('dotenv').config()
import { t, Selector } from 'testcafe'
import * as common_functions from '../../test-helpers/utils/common-functions'
import Selectors from '../../test-helpers/selectors/duckduckgo_selectors.json'


class HomePage {
    constructor() {
        this.search_input = Selector(Selectors.searchInput)
        this.search_button = Selector(Selectors.searchButton),
        this.search_hint = Selector(Selectors.hintSearchTexts)
        this.all_hints = Selector(Selectors.hintSearchCol)
    }

    async  SearchUsingSearchButton(search_input) {
       
       await common_functions.typeText(this.search_input , search_input)
       await t.click(this.search_button)
    }

    async  SearchUsingSearchHints(search_input) {
       
        await common_functions.typeText(this.search_input , search_input)
        for(var i =0 ; i< await this.search_hint.count  ; i ++)
        {
            await t.expect(await (this.search_hint.nth(i).innerText)).contains(search_input)
            console.log((await this.search_hint.nth(i).innerText) + " Contains " +search_input)
        }
        await t.click(this.search_hint.nth(0))
     }
}
export default HomePage


