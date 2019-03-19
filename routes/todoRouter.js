const router = require('express').Router();
const db = require('../database/dbConfig');

// GET todos
router.get('/list', async (req, res) => {
    res.send(`GET todo's auth test!`)
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