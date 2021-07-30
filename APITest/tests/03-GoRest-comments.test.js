require('dotenv').config()
import GORestCommentsAPI from '../models/pages/user_comments_api.js'
const gorest_comments_api = new GORestCommentsAPI()
const comments_data = require('../test-helpers/test-data/comments_data.json')


fixture`Run Create new Posts API`
    .page`${process.env.duckduckgoURL}`

test(' -----  Get All Posts comments  -----', async t => {
    await gorest_comments_api.GetallPostComments(comments_data.post_id)
});
test(' -----  Create new post comment    -----', async t => {
    await gorest_comments_api.CreateNewComments(comments_data, comments_data.post_id)
});





