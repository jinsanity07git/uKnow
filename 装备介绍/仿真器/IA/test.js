// import d3 from '/js/d3.v4.min'


// var d3 = require('./js/d3.v4.min');
// import * as d3 from 'd3';
var d3 = require("d3");

// run in chrome console 
// node not support  d3 fetch 

// var apiUrl = 'https://api.github.com/repos/jinsanity07git/uKnow/readme'

var apiUrl = 'https://raw.githubusercontent.com/jinsanity07git/uKnow/master/装备介绍/仿真器/02_1_TRF_Geojson_node/README.md'
d3.html(apiUrl).header('Accept', 'application/vnd.github.VERSION.html').get(function(err, html) {
    if (err) {
      var errorMessage = 'Error loading README file from GitHub API'

      try {
        var response = JSON.parse(err.currentTarget.response)
        var status = err.currentTarget.status

        errorMessage = errorMessage + ': ' + response.message + ' (' + status + ')'
      } catch (e) {
      }
      //  setItem() before getitem()
      cache.setItem(apiUrl, {
        success: false,
        error: errorMessage
      })
      reject(errorMessage)
    } else {
      //  if get request success
      console.log("else_html : "+ html)
      htmlStr = new XMLSerializer().serializeToString(html)
      console.log("htmlStr: " + htmlStr)
      cache.setItem(apiUrl, {
        success: true,
        htmlStr: htmlStr
      })
      resolve(_this.fixRelativeLinks(org, repo,path, html))

      // console.log(d3)
    }
  })
