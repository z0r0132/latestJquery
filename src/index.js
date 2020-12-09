var exec = require("child_process").exec;
var mustache = require("mustache");

var fs = require("fs");
var path = require("path");

var generateScriptTag = require("./generate-string-tag");

function writeToANewFile(fileURl, content) {
  fs.writeFile(path.join(__dirname, fileURl), content, function (err, data) {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("done :)");
    }
  });
}

function renderWithTemplate(templateUrl, destinationURl, variables) {
  fs.readFile(
    path.join(__dirname, templateUrl),
    { encoding: "utf-8" },
    function (err, template) {
      var content = mustache.render(template, variables);
      writeToANewFile(destinationURl, content);
    }
  );
}

exec("npm view jquery@latest --json", function (error, stdout) {
  var response = JSON.parse(stdout);
  var latestVersion = response["dist-tags"].latest;
  var variables = { script: generateScriptTag(latestVersion) };
  renderWithTemplate("../template/index.mustache", "../index.html", variables);
});
