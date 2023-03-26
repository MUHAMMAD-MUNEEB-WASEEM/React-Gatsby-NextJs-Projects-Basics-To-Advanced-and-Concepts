import { createServer } from "miragejs"

export default function () {
    let arr = [{id:"1", text:"hello"}]
    let users = [{name:"Muhammad Muneeb", age: 20}]

  createServer({
    routes() {
            this.namespace="/fakeapi"
        this.get("/getTodos", {todos:arr})//(api, data)//for getting or fetching data
        
        //another api
        this.get("/getUsers", {todos:users})
        
        // this.post()//for adding the data

        this.post("/addTodos",(_,req)=>{
            console.log('req', req)
            arr.push(req.requestBody)
        } )

        // this.put()//for updating the data
        // this.delete()//for deleting the data
      },
    }
  )
}