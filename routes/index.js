var survey = require("../controller/surveyController.js");

module.exports = function (app) {
  app.get ('/home',(req,res)=>{
    res.render ('home');
  } );
  app.post('/surveysubmit', survey.saveSubmission);
  app.post('/surveysubmit', survey.listAllSubmission);
}
