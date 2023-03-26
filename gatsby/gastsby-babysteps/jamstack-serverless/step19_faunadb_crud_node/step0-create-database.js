#!/usr/bin/env node

/*
  Create .env file at project root with the following:
  FAUNADB_ADMIN_SECRET=my-admin-secret
*/

//https://docs.fauna.com/fauna/current/tutorials/crud#database

const faunadb = require('faunadb'),
  q = faunadb.query;
require('dotenv').config();


(async () =>{

    var client = new faunadb.Client({ secret: "fnAD-ET2PtACAG6A5sQWqwwTJIQLVDCwIBGosgg2" });
    
    //create database
    try {
      var result = await client.query(
        q.CreateDatabase({ name: 'demodatabase' })
      );
      console.log(result);
    } 
    catch (error){
      if (error.requestResult.statusCode === 400 && error.message === 'instance already exists') {
        console.log('Database with this name already exists');
      }
      else {
        console.log('Unknow Error: ');
        console.log(error);
      }
      
    }

  }
)

