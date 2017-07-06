var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    // mongoose    = require("mongoose"),
    // flash       = require("connect-flash"),
    // passport    = require("passport"),
    // LocalStrategy = require("passport-local"),
    // methodOverride = require("method-override"),
    Poll  = require("./models/poll")
    // Comment     = require("./models/comment"),
    // User        = require("./models/user")
    // seedDB      = require("./seeds")
    
    

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// app.use(methodOverride("_method"));
// app.use(flash());
// seedDB(); //seed the database
// app.locals.moment = require('moment');


// var commentRoutes    = require("./routes/comments"),
//     pollsRoutes = require("./routes/polls"),
//  var   indexRoutes      = require("./routes/index");
    
// PASSPORT CONFIGURATION
// app.use(require("express-session")({
//     secret: "There is no secret!",
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
//  app.use(function(req, res, next){
//   res.locals.currentUser = req.user;
//   res.locals.error = req.flash("error");
//   res.locals.success = req.flash("success");
//   next();
// });

// app.use("/", indexRoutes);
// app.use("/polls", pollsRoutes);
// app.use("/polls/:id/comments", commentRoutes);

//root route
app.get("/", function(req, res){
    res.render("landing");
});

//INDEX - show all campgrounds
app.get("/polls", function(req, res){
    // Get all campgrounds from DB
    // Poll.find({}, function(err, allPolls){
    //   if(err){
    //       console.log(err);
    //   } else {
        //   res.render("polls/index",{polls: allPolls, page: 'polls'});
    //   }
    // });
    res.render("polls/index", {page: 'polls'});
});


// // show register form
app.get("/register", function(req, res){
  res.render("register", {page: 'register'}); 
});


// //show login form
app.get("/login", function(req, res){
  res.render("login", {page: 'login'}); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The HandsUp Server Has Started!");
});