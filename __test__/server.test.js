'use strict';
const server = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(server.app);

 
describe('my Server', ()=> {

    beforeEach(()=> {
        jest.spyOn(console, 'log').mockImplementation();
    })

    it('handles not found request', async () => {
        // add test
        const response = await request.get('/asd');
        expect(response.status).toEqual(404);
    });

    it('handles not found request bad method', async () => {
        // add test
        const response = await request.post('/asd');
        expect(response.status).toEqual(404);
    });

   
    
    it('handles my no userName', async () => {
        const response = await request.get('/person'); // async
        expect(response.status).toEqual(500);
    });

    it('handles my data', async () => {
        const response = await request.get('/person').query({userName:"thaer"}); 
        expect(response.status).toEqual(200);
    });
   
    
    it('the output object is correct', async () => {
        const response = await request.get('/person').query({userName:"thaer"}); 
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object');
    });
   


});

