const router = require('express').Router();
const db = require('../database/dbConfig');
const { auth } = require('../database/helpers/auth');

// GET todos
router.get('/todos', auth, async (req, res) => {
    res.send(`GET todo's auth test!`)
});

// // GET/:id todos
// router.get('/todos/:id', auth, async (req, res) => {
//
// });
//
// // POST todos
// router.get('/todos', auth, async (res, res) => {
//
// });
//
// // PUT/:id todos
// router.put('/todos/:id', auth, async (res, res) => {
//
// });
//
// // DELETE/:id todos
// router.delete('/todos/:id', auth, async (req, res) => {
//
// });

modules.export = router;