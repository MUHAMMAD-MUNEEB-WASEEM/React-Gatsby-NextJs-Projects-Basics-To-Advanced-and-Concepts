let crypto = require('crypto')//for unique or random ids
let localData = {}

const resolver = {

    Query:{
        getMessage: () => {
            return "hello world"
        },

        getName: () => {
            return "Muneeb"
        },
        getAllMessags: ()=>{
            return [{message:"test", id:"2343"}, {message:"test", id:"2343"}]
        }
    },

    Mutation: {
        createMessage: (_,{input}) => {
            //console.log("args",args)
            let id = crypto.randomBytes(10).toString("hex");
            console.log('id', id)
            localData[id] = {id,...input.message}
            return {id,...input}
        }

    }
}
module.exports = resolver