const express = require("express");
const router = express.Router();
const { getExercises, addExercise, deleteExercise, updateExercise } = require('../controller/exercises');

router
    .route('/')
    .get(getExercises);

router
    .route('/add')
    .post(addExercise);

router
    .route('/:id')
    .delete(deleteExercise);

router
    .route('/update/:id')
    .put(updateExercise);
module.exports = router