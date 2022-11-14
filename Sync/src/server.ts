var convert = require('xml-js');

import {GetNextUser} from './accessors/Database'

import dotenv from 'dotenv';
dotenv.config();

RunSync()

async function RunSync(): Promise<void> {
    while(true){
        
        var cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - 2);

        let user = await GetNextUser(cutoffDate.toISOString())
        console.log(user);

        await sleep(5000);
    }
}

function sleep(ms:number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

// GetNextUser
// var result1 = convert.xml2json(test, {compact: false, spaces: 2});
// console.log(result1)
//  var result2 = convert.json2xml(result1, {compact: false, spaces: 2});
// console.log(result2)
