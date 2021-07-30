import { t } from 'testcafe';
require('dotenv').config()

class GoRestPostsAPI {
    constructor() {
        //  for API requests 
        this.axios = require('axios')
        this.fs = require("fs");

    }

    async  CreateNewPost(post_details_body,user_id) {
        console.log("Create post to user")
        const response = await this.axios.post(process.env.APIUrl +"users/" + user_id +"/posts", JSON.parse(JSON.stringify(post_details_body)), {
            headers: {
                'Authorization': process.env.BearerToken
            }
        });
        console.log("Create new user Response :")
        console.log(response.data)
        await t.expect(response.status).eql(201)
        return response.data.id
    }



    async GetallUserPosts(user_id) {
        console.log("Get All user posts")
        const response = await this.axios.get(process.env.APIUrl +"users/" + user_id +"/posts", {
            headers: {
                'Authorization': process.env.BearerToken
            }
        });
        console.log("get user Response :")
        console.log(response.data)
        await t.expect(response.status).eql(200)

    }

}
export default GoRestPostsAPI