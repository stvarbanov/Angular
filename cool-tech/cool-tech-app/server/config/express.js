const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/auth');

const { ORIGIN } = require('./config.js');
module.exports = app => {
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(cors(
        {
            origin: ORIGIN,
            credentials: true
        }
    ));

    // app.use(auth());
}