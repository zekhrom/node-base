const _ = require('lodash');
const express = require('express');
const { ObjectID } = require('mongodb');
const { Task } = require('../models/taskSchema');

const router = express.Router({ mergeParams: true });

router.get('/tasks', function (req, res) {
    Task.find().then((tasks) => {
        res.send({ tasks });
    }).catch(e => res.status(400).send(e));
});

router.get('/task/:id', function (req, res) {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(404).send();
    }

    Task.findById(req.params.id).then((task) => {
        res.send({ task });
    }).catch(e => res.status(400).send(e));
});

router.post('/task', function (req, res) {
    let body = _.pick(req.body, ['name']);
    let task = new Task(body);

    task.save().then((t) => {
        res.send(t);
    }).catch(e => res.status(400).send(e));
});

router.patch('/task/:id', function (req, res) {
    let body = _.pick(req.body, ['name']);

    if (!ObjectID.isValid(req.params.id)) {
        return res.status(404).send();
    }

    Task.findOneAndUpdate({ _id: req.params.id }, { $set: body }, { new: true })
        .then((task) => {
            res.send({ task });
        }).catch(e => res.status(400).send(e));
});

router.delete('/task/:id', function (req, res) {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(404).send();
    }

    Task.findOneAndRemove({ _id: req.params.id })
        .then((task) => {
            if (!task) {
                return res.status(404).send();
            }
            res.send({ task });
        }).catch((e) => {
            return res.status(404).send();
        });
});

module.exports = router;