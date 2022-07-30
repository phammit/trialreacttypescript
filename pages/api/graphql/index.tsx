//this file patterned on https://brianlovin.com/writing/cookies-authenticate-next-js-apollo-graphql-requests
import { ApolloServer } from "apollo-server-express";
import type { NextApiRequest, NextApiResponse  } from "next";
//import  { Cryptr } from 'cryptr';

//import cookies from '/';
//import resolvers from '/';
//import typeDefs from '.';


function isAuthenticated(req: NextApiRequest) {
    // I use a cookie called 'session'
    const { session } = req?.cookies

    // Cryptr requires a minimum length of 32 for any signing
    if (!session || session.length < 32) {
        return false
    }

    const secret = process.env.PASSWORD_TOKEN
    const validated = process.env.PASSWORD
    //cryptr has typescript error.. need to https://javascript.plainenglish.io/a-simple-encryption-library-in-node-js-with-typescript-d72c294998bf
    //const cryptr = new Cryptr(secret)
    //const decrypted = cryptr.decrypt(session)
    //return decrypted === validated
    return true;


}