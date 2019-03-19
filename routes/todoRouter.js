const router = require('express').Router();
const database = require('../database/dbConfig');

// GET todos
router.get('/list', async (req, res) => {
    try {
        const todo = await database('todos');
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({
            error: "The todo's information could not be retrieved"
        })
    }
});
//
// // GET/:id todos
// router.get('/list/:id', async (req, res) => {
//
// });
//
// // POST todos
// router.post('/create', async (res, res) => {
//
// });
//
// // PUT/:id todos
// router.put('/edit/:id', async (res, res) => {
//
// });
//
// // DELETE/:id todos
// router.delete('/delete/:id', auth, async (req, res) => {
//
// });

module.exports = router;