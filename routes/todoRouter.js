const router = require('express').Router();
const database = require('../database/dbConfig');

// GET todos
router.get('/list', async (req, res) => {
    try {
        const todo = await database('todos').where('userId', req.body.id)
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({
            error: "The todo's information could not be retrieved"
        })
    }
});

// GET/:id todos
// router.get('/list/:id', async (req, res) => {
//
// });

// POST todos
router.post('/create', async (req, res) => {
    const todoT = req.body;
    try {
        if (!todoT.title) {
            res.status(404).json({
                message: "Todo needs a title"
            })
        }
        const todo = await database('todos').insert(todoT);
        res.status(201).json({
            message: "Todo has been created",
            todo
        })
    } catch (e) {
        res.status(500).json(e)
    }
});

// // PUT/:id todos
// router.put('/edit/:id', async (res, res) => {
//
// });
//

// DELETE/:id todos
router.delete('/delete/:id', async (req, res) => {
    const id = req.body.id;
    const count = await database('todos').where(id).del();
    try {
        if (count > 0) {
            res.status(200).json({
                message: "Todo has been deleted"
            })
        } else {
            res.status(404).json({
                error: "The todo with the specified ID does not exist"
            })
        }
    } catch (e) {
        console.log(req.params)
        res.status(500).json(e)
    }
});

module.exports = router;