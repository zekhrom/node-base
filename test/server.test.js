const expect = require('expect');
const request = require('supertest');

const { app } = require('../server');
const { tasks } = require('./mockData/dummy');

let taskId;

describe('Task Unit Test', () => {
    it('should create task', (done) => {
        const [task] = tasks

        request(app)
            .post('/v1/task')
            .send(task)
            .expect(200)
            .expect((res) => {
                expect(res.body._id).toBeTruthy();
                expect(res.body.name).toBeTruthy();
                taskId = res.body._id;
            })
            .end((e) => {
                done(e);
            });
    });

    it('should update task', (done) => {
        const newName = 'New name to test PATCH';
        request(app)
            .patch(`/v1/task/${taskId}`)
            .send({ name: newName })
            .expect(200)
            .expect((res) => {
                expect(res.body.task.name).toBe(newName);
            })
            .end(done);
    });

    it('should delete task', (done) => {
        request(app)
            .delete(`/v1/task/${taskId}`)
            .expect(200)
            .end(done);
    });
});

