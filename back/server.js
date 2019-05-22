const mongoose = require("mongoose");
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
const logger = require("morgan");
var cors = require('cors');
const Staff = require("./staff-model");

const API_PORT = 3001;

//Mongodb connection
const dbRoute = "mongodb://staffadmin:password12345@cluster0-shard-00-00-eciac.mongodb.net:27017,cluster0-shard-00-01-eciac.mongodb.net:27017,cluster0-shard-00-02-eciac.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
mongoose.connect(dbRoute,{ useNewUrlParser: true });
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));


var app = express();
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(logger("dev"));



app.get('/simple-cors', cors(), function(req, res){
  res.json({
    text: 'Simple CORS requests are working. [GET]'
  });
});

// define the home page route
router.get('/', function (req, res) {

	console.log(req.body);
	// console.log(res);
  	res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

router.get('/staffs', function (req, res) {

	Staff.find((err, staffs) => {
	    if (err) return res.json({ success: false, error: err });
	    return res.json({ success: true, staffs: staffs });
	});
})

router.get('/staffs/:id', function (req, res) {

	Staff.findOne({id:req.params.id},(err, staff) => {
	    if (err) return res.json({ success: false, error: err });
	    return res.json({ success: true, staff: staff });
	});
})

router.post("/staffs", (req, res) => {
	let staff = new Staff();
	const {name, role, description } = req.body;
	console.log(req.body);

	staff.id = Date.now();
	staff.name = name;
	staff.role = role;
	staff.description = description;
	
	staff.save(err => {
	  	if (err) return res.json({ success: false, error: err });
	  	return res.json({ success: true, staff: staff });
	});
});

router.delete("/staffs/:id", (req, res) => {

	Staff.deleteOne({ id: req.params.id }, function (err) {
	  if (err) return handleError(err);
	  return res.json({ success: true });
	});
});

router.put("/staffs/:id", (req, res) => {

	Staff.findOne({id:req.params.id}, function (err, staff) {

		const {name, role, description } = req.body;
		staff.name = name;
		staff.role = role;
		staff.description = description;
		
		staff.save().then(function(staff) {
			return res.json({ success: true, staff: staff  });
		});
		
	});
});

app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));