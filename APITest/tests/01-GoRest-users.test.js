require('dotenv').config()
import GORestAPI from '../models/pages/users_api.js'
const gorest_api = new GORestAPI()
const user_data = require('../test-helpers/test-data/user_data.json')


fixture`Run Create user API`
    .page`${process.env.duckduckgoURL}`


test(' -----  Create new User  -----', async t => {
    await gorest_api.CreateNewUser(user_data.newuser)
});

test(' -----  Get user by ID   -----', async t => {
    await gorest_api.GetUserById(user_data.userid)
});


test(' -----  Get All users    -----', async t => {
    await gorest_api.GetAllUsers()
});

test(' -----  Update user by ID   -----', async t => {
    await gorest_api.PatchUser(user_data.userid , user_data.updateuser)
});

test(' -----  Delete user by ID   -----', async t => {
    await gorest_api.DeleteUser(user_data.userdeleteId)
});



