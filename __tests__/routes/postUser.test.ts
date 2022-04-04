import { describe, expect, it } from "@jest/globals";
import { Params } from "express-serve-static-core";
import request from "supertest";
// import {Response, Request} from 'express'

const createUserController = {};

// type mockResponse<TResult> = Response & {
//   state :{
//     status?: number
//     json?: TResult | unknown
//   }
// }

// function mackmockResponse<TResult> (){
//   const response = {
//     state :{}
//     } as mockResponse<TResult>;

//       response.status = (status: number) =>{
//         response.state.status = status;
//         return response;
//     }

//     response.json = (json:TResult) => {
//       response.state.json = json;
//       return response;
//     }
//     return response;

//   }

// interface mockRequest{
//   params?: Params;

// }
// function mackmockRequest({params}:mockRequest){
//   const request = {
//     params: params || {}
//   }
//   return request as Request
// }

describe("Create user", () => {
  it("Should create a user", async () => {
    const user = {
      name: "daniel",
      email: "daniel@kenzie.com",
      password: "123456",
      isAdm: true,
    };
    const response = await request(app).post("/users").send(user);
    console.log(response);
    expect(response.statusCode).toBe(201);
  });
});

// Criando usuário:
// POST: /users
// {
//   "name": "daniel",
//   "email": "daniel@kenzie.com",
//   "password": "123456",
//   "isAdm": true
// }
// Status: 201 CREATED
// {
//   "uuid": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7",
//   "createdOn": "2021-11-18T01:23:52.910Z",
//   "updatedOn": "2021-11-18T01:23:52.910Z",
//   "name": "daniel"
//   "email": "daniel@kenzie.com",
//   "isAdm": true
// }
