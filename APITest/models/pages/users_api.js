import { t } from 'testcafe';
require('dotenv').config()

class GoRestUsersAPI {
    constructor() {
        //  for API requests 
        this.axios = require('axios')
        this.fs = require("fs");
    }

    async  CreateNewUser(user_details_body) {
        console.log("Create new user")
        const response = await this.axios.post(process.env.APIUrl +"users/", JSON.parse(JSON.stringify(user_details_body)), {
            headers: {
                'Authorization': process.env.BearerToken
            }
        });
        console.log("Create new user Response :")
        console.log(response.data)
        await t.expect(response.status).eql(201)
        return response.data.id
    }

    async  GetUserById(user_id) {
        console.log("Get user by ID ")
        const response = await this.axios.get(process.env.APIUrl+"users/" + user_id, {
            headers: {
                'Authorization': process.env.BearerToken
            }
        });
        console.log("Get Store with ID " + user_id + " Response :")
        console.log(response.data)
        await t.expect(response.status).eql(200)
        return response
    }

    async  DeleteUser(user_id) {
        console.log("Delete user")
        const response = await this.axios.delete(process.env.APIUrl +"users/" + user_id, {
            headers: {
                'Authorization': process.env.BearerToken
            }
        });
        console.log("Delete user Response :")
        console.log(response.data)
        await t.expect(response.status).eql(204)

    }

    async  PatchUser(user_id, user_details_body) {
        console.log("Update User")
        const response = await this.axios.patch(process.env.APIUrl +"users/" + user_id, JSON.parse(JSON.stringify(user_details_body)), {
            headers: {
                'Authorization': process.env.BearerToken
            }
        });
        console.log("Update user Response :")
        console.log(response.data)
        await t.expect(response.status).eql(200)
        await t.expect(response.data.data.id).eql(user_id)
    }


    async GetAllUsers() {
        console.log("Get All User")
        const response = await this.axios.get(process.env.APIUrl +"users/", {
            headers: {
                'Authorization': process.env.BearerToken
            }
        });
        console.log("get user Response :")
        console.log(response.data)
        await t.expect(response.status).eql(200)

    }

}
export default GoRestUsersAPI