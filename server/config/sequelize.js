console.log("Loading sequelize.js");

const Sequelize    = require('sequelize');
const fs          = require ('fs');
const path        = require('path');
const db_name     = "touch_base"; // <<<<<<<<<<<< CHANGE DB NAME >>>>>>>>>>>>
const reg         = new RegExp( ".js$", "i" );
const dbURI       = 'mongodb://localhost/' + db_name;
const models_path = path.join( __dirname, "../models");

const sequelize = new Sequelize('mysql://root:root@127.0.0.1:3306/touch_base');

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// process.on( 'SIGINT', function() {
//   mongoose.connection.close( function () {
//     console.log( 'Mongoose default connection disconnected through app termination' );
//     process.exit( 0 );
//   });
// });

fs.readdirSync(models_path).forEach(function (file) {
    if ( reg.test( file ) ) {
        require( path.join( models_path, file ) );
    }
});
