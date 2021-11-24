const Exercises = require('../models/Exercises');

// @desc    GET all exercises
// @route   GET /api/exercises
// @access  public

exports.getExercises = async (req, res, next) => {
    // res.send('Get all data');
    try {
        const Exercise = await Exercises.find();

        return res.status(200).json({
            success: true,
            count: Exercise.length,
            data: Exercise
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

// @desc    add exercises
// @route   POST /api/exercises/add
// @access  public

exports.addExercise = async (req, res, next) => {
    try {

        // virtual schema by mongoose if we want to add specific fields other than predefined schema
        const exercise = new Exercises({
            title: req.body.title
        })
        
        // const { title } = req.body;

        // const Exercise = await Exercises.create(req.body);
        const exs = await exercise.save();
        console.log(exs);

        return res.status(201).json({
            success: true,
            data: exs
        })
    } catch (error) {
        console.log(error);
        if(error.name === 'ValidationError'){
            const message = Object.values(error.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: message
            });
        }
        else{
            return res.status(500).json({
                success: false,
                error: 'Server error'
            })
        }
    }
}

// @desc    delete exercises
// @route   DELETE /api/exercises/delete:id
// @access  public

exports.deleteExercise = async (req, res, next) => {
    try {
        const Exercise = await Exercises.findById(req.params.id);

        if(!Exercise){
            return res.status(400).json({
                success: false,
                error: 'No Record Found'
            });
        }
        
        await Exercise.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

// @desc    update exercises
// @route   UPDATE /api/exercises/delete:id
// @access  public

exports.updateExercise = async (req, res, next) => {
    try {
        const { title, price, details, image } = req.body;
        const Exercise = await Exercises.findById(req.params.id);

        if(!Exercise){
            return res.status(400).json({
                success: false,
                error: 'No Record Found'
            });
        }
        
        const updated = await Exercise.updateOne(req.body);

        return res.status(200).json({
            success: true,
            data: updated
        })
    } catch (error) {
        if(error.name === 'ValidationError'){
            const message = Object.values(error.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: message
            });
        }
        else{
            return res.status(500).json({
                success: false,
                error: 'Server error'
            })
        }
    }
}