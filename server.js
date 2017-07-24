console.log("Loading server.js");

let express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = 8000, // Adjust Required Port Number
    project  = "TOUCH BASE", // Change Project Name
    app      = express();

app.use(express.static('client'));
app.use(express.static('bower_components'));
app.use(bp.json());

require(path.join(root, './server/config/sequelize.js'));
require(path.join(root, './server/config/routes.js'))(app);

app.listen(port, function(){
  console.log(`listening for ${ project } on port ${ port }`);
});
