import { LocalApp } from '../localServer.js'
import supertest from 'supertest'
import { readJSON } from '../utils.js'
import { filterTheJobArray } from "../utils.js";


const api = supertest(LocalApp())

const jobs = readJSON('./localData/jobDataParis.json')

describe('GET /jobData', () => {
    test('Should return 200 and one element of the original array', async () => {
        await api.get("/jobData")
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(filterTheJobArray(jobs.resultats)).toEqual(expect.arrayContaining(response.body));
                expect(response.body.length).toBe(1);
            })
    });
    test('Should return 200 and 10 elements of the original array', async () => {
        await api.get("/jobData?number=10")
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(filterTheJobArray(jobs.resultats)).toEqual(expect.arrayContaining(response.body));
                expect(response.body.length).toBe(10);
            })
    });
    test('Should return 200 and 10 elements of the original array if he put a number >10', async () => {
        await api.get("/jobData?number=11")
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(filterTheJobArray(jobs.resultats)).toEqual(expect.arrayContaining(response.body));
                expect(response.body.length).toBe(10);
            })
    });
});

