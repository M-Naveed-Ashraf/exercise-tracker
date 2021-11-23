const express = require("express");
const cors = require("cors");
const router = express.Router();
const { getExercises, addExercise, deleteExercise, updateExercise } = require('../controller/exercises');


router.use(cors())

router
    .route('/main')
    .get(getExercises);

router
    .route('/addNewTask')
    .post(addExercise);

router
    .route('/:id')
    .delete(deleteExercise);

router
    .route('/update/:id')
    .put(updateExercise);
module.exports = router