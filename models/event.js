const { DateTime } = require("luxon");
const { v4: uuidv4 } = require('uuid');
// const events = [
//     {
//         id: '1',
//         category: 'Cat Related Events',
//         title: 'Catcon 2023',
//         hostName: 'A Cat',
//         location: 'A land far far away',
//         startDateTime: '2023-01-01T10:00:00',
//         endDateTime: '2023-01-04T20:00:00',
//         details: 'A cat will be hosting the annual cat con this year! Wow! a real cat. I hope he has a sense of humor.',
//         image: '/images/cat-computer.jpg'
//     },
//     {
//         id: '2',
//         category: 'Cat & Dog Events',
//         title: 'Social Walk',
//         hostName: 'A Cat',
//         location: 'The park',
//         startDateTime: '2023-01-15T10:00:00',
//         endDateTime: '2023-03-01T20:00:00',
//         details: 'We will be hosting a cat and dog social walking event. We will be walking around the park and having a good time. Note that only friendly animals are allowed.',
//         image: '/images/cat-computer.jpg'
//     },
//     {
//         id: '3',
//         category: 'Cat & Dog Events',
//         title: 'Treats',
//         hostName: 'A Man',
//         location: '4290 Mouse Ave',
//         startDateTime: '2023-01-01T10:00:00',
//         endDateTime: '2023-01-04T20:00:00',
//         details: 'A cat will be hosting the annual cat con this year! Wow! a real cat. I hope he has a sense of humor.',
//         image: '/images/cat-computer.jpg'
//     },
//     {
//         id: '4',
//         category: 'Cat & Dog Events',
//         title: 'Catdog show',
//         hostName: 'A Cat',
//         location: 'A land far far away',
//         startDateTime: '2023-01-01T10:00:00',
//         endDateTime: '2023-01-05T20:00:00',
//         details: 'Does anyone want to watch and old cartoon called catdog? I have the dvd and I want to watch it with someone.',
//         image: '/images/cat-computer.jpg'
//     },
//     {
//         id: '5',
//         category: 'Cat Related Events',
//         title: 'Cat Playdate',
//         hostName: 'Cat Owner',
//         location: '3506 Cat Ave',
//         startDateTime: '2023-01-01T10:00:00',
//         endDateTime: '2023-01-04T20:00:00',
//         details: 'Hello, I want a friendly cat to play with my cat. My cat is very friendly and loves to play. I hope to see you there!',
//         image: '/images/Cat-playing.png'
//     },
//     {
//         id: '6',
//         category: 'Cat Related Events',
//         title: 'Cat Fight',
//         hostName: 'Cats Wrestling',
//         location: '3200 Cat Ave',
//         startDateTime: '2023-01-01T10:00:00',
//         endDateTime: '2023-01-01T12:00:00',
//         details: 'Two cats are about to duke it out in a deathmatch. Who will win? You will have to come to find out!',
//         image: '/images/Cat-playing.png'
//     }
// ];

// const CATegories = ['Cat Related Events', 'Cat & Human Help Events', 'Cat Exclusive Events', 'Cat & Dog Events', 'Other'];

// exports.find = () => events;

// exports.CAT = () => CATegories;

// exports.findById = id => events.find(event => event.id === id);

// exports.save = event => {
//     event.id = uuidv4()
//     events.push(event);
//     console.log(event);
// };

// exports.updateById = (id, newEvent) => {
//     let event = events.find(event => event.id === id);
//     if(event) {
//         Object.assign(event, newEvent);
//         return true;
//     } else {
//         return false;
//     }
// };

// exports.deleteById = id => {
//     let index = events.findIndex(event => event.id === id);
//     if(index !== -1) {
//         events.splice(index, 1);
//         return true
//     } else {
//         return false;
//     }
// };
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CATegories = ['Cat Related Events', 'Cat & Human Help Events', 'Cat Exclusive Events', 'Cat & Dog Events', 'Other'];

const eventSchema = new Schema({
    hostName: { type: String, required: [true, 'Host name is required']},
    title: { type: String, required: [true, 'Title is required']},
    category: { type: String, required: [true, 'Category is required']},
    location: { type: String, required: [true, 'Location is required']},
    startDateTime: { type: Date, required: [true, 'Start Date & Time is required']},
    endDateTime: { type: Date, required: [true, 'End Date & Time is required']},
    details: { type: String, required: [true, 'Details are required']},
    image: { type: String, required: [true, 'Image is required']}
},
{timestamps: true}
);

exports.CAT = () => CATegories;

module.exports = mongoose.model('Event', eventSchema);