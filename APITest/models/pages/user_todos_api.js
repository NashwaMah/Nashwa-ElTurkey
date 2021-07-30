import { t } from 'testcafe';
require('dotenv').config()

class GoRestTodosAPI {
    constructor() {
        //  for API requests 
        this.axios = require('axios')
        this.fs = require("fs");

    }

    async  CreateNewTodos(todos_details_body,user_id) {
        console.log("Create todos to user")
        const response = await this.axios.post(process.env.APIUrl +"users/" + user_id +"/todos", JSON.parse(JSON.stringify(todos_details_body)), {
            headers: {
                'Authorization': process.env.BearerToken
            }
        });
        console.log("Create new user Response :")
        console.log(response.data)
        await t.expect(response.status).eql(201)
        return response.data.id
    }



    async GetallUserTodos(user_id) {
        console.log("Get All user todos")
        const response = await this.axios.get(process.env.APIUrl +"users/" + user_id +"/todos", {
            headers: {
                'Authorization': process.env.BearerToken
            }
        });
        console.log("get user Response :")
        console.log(response.data)
        await t.expect(response.status).eql(200)

    }

}
export default GoRestTodosAPI