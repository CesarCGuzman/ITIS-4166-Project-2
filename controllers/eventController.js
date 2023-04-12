// Reqiure the model
const model = require('../models/event');
const { DateTime } = require("luxon");

// Returns all events: /events/allEvents
exports.index = (req, res) => {
    let events = model.find();
    let CATegories = model.CAT();

    res.render('../views/event/allEvents', {events, CATegories});
};

// Returns a form for creating a new event: /events/new
exports.new = (req, res) => {
    let CATegories = model.CAT();
    res.render('../views/event/newEvent', {CATegories});
};

// Creates a new event: /events
exports.create = (req, res) => {
    let event = req.body;
    let image = '/images/' + req.file.filename;
    event.image = image;
    model.save(event);
    res.redirect('/events');
};

// Shows a specific event: /events/:id
exports.show = (req, res, next) => {
    let id = req.params.id;
    let event = model.findById(id);
    if(event) {
        // Format the start date and time
        const startDateTime = DateTime.fromISO(event.startDateTime).setZone('est');
        const formattedStart = startDateTime.toFormat('MM/dd/yyyy h:mm a');

        // Formate the end date and time
        const endDateTime = DateTime.fromISO(event.endDateTime).setZone('est');
        const formattedEnd = endDateTime.toFormat('MM/dd/yyyy h:mm a');

        res.render('../views/event/event', {event, formattedStart, formattedEnd});
    } else {
        let err = new Error('The server cannot locate event with id of ' + req.url);
        err.status = 404;
        next(err);
    }
};

// Returns a form for editing a specific event: /events/:id/edit
exports.edit = (req, res, next) => {
    let id = req.params.id;
    let event = model.findById(id);
    let CATegories = model.CAT();
    if(event) {
        res.render('./event/editEvent', {event, CATegories});
    } else {
        let err = new Error('The server cannot locate event with id ' + req.url);
        err.status = 404;
        next(err);
    }
};

// Updates a specific event: /events/:id
exports.update = (req, res, next) => {
    let id = req.params.id;
    let event = req.body;

    // Sets the image path to path and filename
    if(req.file) {
        let image = '/images/' + req.file.filename;
        event.image = image;
    } else {
        delete req.body.image;
    }

    if(model.updateById(id, event) === true) {
        res.redirect('/events/' + id);
    } else {
        let err = new Error('The server cannot locate event with id ' + req.url);
        err.status = 404;
        next(err);
    }
};

// Deletes a specific event: /events/:id
exports.delete = (req, res, next) => {
    let id = req.params.id;
    if(model.deleteById(id)) {
        res.redirect('/events');
    } else {
        let err = new Error('The server cannot locate event with id ' + req.url);
        err.status = 404;
        next(err);
    }
};