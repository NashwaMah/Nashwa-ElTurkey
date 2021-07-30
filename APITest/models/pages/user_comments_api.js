import { t } from 'testcafe';
require('dotenv').config()

class GoRestCommentsAPI {
    constructor() {
        //  for API requests 
        this.axios = require('axios')
        this.fs = require("fs");

    }

    async  CreateNewComments(comments_details_body, post_id) {
        console.log("Create post to comment")
        const response = await this.axios.post(process.env.APIUrl + "/posts/" + post_id + "/comments", JSON.parse(JSON.stringify(comments_details_body)), {
            headers: {
                'Authorization': process.env.BearerToken
            }
        });
        console.log("Create new user Response :")
        console.log(response.data)
        await t.expect(response.status).eql(201)
        return response.data.id
    }

    async GetallPostComments(post_id) {
        console.log("Get All post comments")
        const response = await this.axios.get(process.env.APIUrl + "/posts/" + post_id + "/comments", {
            headers: {
                'Authorization': process.env.BearerToken
            }
        });
        console.log("get user Response :")
        console.log(response.data)
        await t.expect(response.status).eql(200)

    }

}
export default GoRestCommentsAPI