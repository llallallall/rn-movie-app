// track the searches made by a user

import {Client, Query, TablesDB, ID} from "react-native-appwrite";


const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const TABLE_ID = process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID!;

const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

const tablesDB = new TablesDB(client);


export const updateSearchCount  = async (query:string, movie: Movie) => {
    // console.log(DATABASE_ID);
    // console.log(TABLE_ID);

    // check if a record of that search has already been stored
    try {
            const result = await tablesDB.listRows({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                queries: [
                    Query.equal('searchTerm', query)
                ]
            })

            // if a document is found increment the searchCount field

            if(result.rows.length > 0){
                const existingMovie = result.rows[0];
                await tablesDB.updateRow(
                    DATABASE_ID,
                    TABLE_ID,
                    existingMovie.$id,
                    {
                        count: existingMovie.count + 1,
                    }
                )
            }
            // if no document is found
            // create a new document in Appwrite database -> 1

            else {
                await tablesDB.createRow(
                    DATABASE_ID,
                    TABLE_ID,
                    ID.unique(),
                    {
                        searchTerm: query,
                        movie_id : movie.id,
                        count: 1,
                        poster_url : movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://placehold.co/600x400/1a1a1a/ffffff/png',
                        title : movie.title,
                    }
                )

            }

    } catch (error) {
        console.log(error);
        throw error;
    }


    // console.log(result);






}