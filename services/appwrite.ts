// track the searches made by a user

import {Client, Query, TablesDB} from "react-native-appwrite";


const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const TABLE_ID = process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID!;

const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

const tablesDB = new TablesDB(client);


export const updateSearchCount  = async (query:string, movie: Movie) => {
    // console.log(DATABASE_ID);
    // console.log(TABLE_ID);
    const result = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        queries: [
            Query.equal('searchTerm', query)
        ]
    })

    console.log(result);


    // check if a record of that search has already been stored
    // if a document is found increment the searchCount field
    // if no document is found
        // create a new document in Appwrite database -> 1



}