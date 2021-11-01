const mongoose = require('mongoose');

mongoose.plugin(schema => { schema.options.usePushEach = true });

let TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 6
    }
});

let Task = mongoose.model('Task', TaskSchema);

module.exports = { Task };