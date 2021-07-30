require('dotenv').config()
import GORestPostsAPI from '../models/pages/user_posts_api.js'
const gorest_posts_api = new GORestPostsAPI()
const posts_data = require('../test-helpers/test-data/posts_data.json')


fixture`Run Create new Posts API`
    .page`${process.env.duckduckgoURL}`


test(' -----  Get All User Posts   -----', async t => {
    await gorest_posts_api.GetallUserPosts(posts_data.userid)
});

test(' -----  Create new user post    -----', async t => {
    await gorest_posts_api.CreateNewPost(posts_data.postdetails,posts_data.userid)
});





