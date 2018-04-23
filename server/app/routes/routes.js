// routes.js

var ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {

    var bodyParser = require('body-parser');
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/Client/get_user', (req, res) => {
        const id = req.params.id;
        const details = {'_id': ObjectID(id)};
        db.collection('client').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    });


    app.delete('/Client/delete_user', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('client').remove(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send('Client ' + id + ' deleted!');
            }
        });
    });


    app.put('/Client/update_user', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };
        db.collection('client').update(details, user, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(user);
            }
        });
    });


    app.post('/Client/login', (req, res) => {
        const loginInfo = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };
        db.collection('client').insert(loginInfo, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                var dict = {};

                dict["username"] = loginInfo.username;
                dict["email"] = loginInfo.email;
                dict["password"] = loginInfo.password;

                //res.send(result.ops[0]);
                res.send(dict);
            }
        });
    });

    app.post('/Client/sign_up', (req, res) => {

        const signupInfo = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };

        db.collection('client').insert(signupInfo, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {

                var dict = {};

                dict['success'] = "true";
                dict['token'] = '890xjk3hjk279hlnioasd889j';

                dict["username"] = signupInfo.username;

                res.send(dict);
            }
        });
    });

};