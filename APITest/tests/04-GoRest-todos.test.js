require('dotenv').config()
import GOResttodosAPI from '../models/pages/user_todos_api.js'
const gorest_todos_api = new GOResttodosAPI()
const todos_data = require('../test-helpers/test-data/todos_data.json')


fixture`Run Create new Posts API`
    .page`${process.env.duckduckgoURL}`


test(' -----  Get All Posts comments  -----', async t => {
    await gorest_todos_api.GetallUserTodos(todos_data.user_id)
});

test(' -----  Create new post comment    -----', async t => {
    await gorest_todos_api.CreateNewTodos(todos_data, todos_data.user_id)
});





