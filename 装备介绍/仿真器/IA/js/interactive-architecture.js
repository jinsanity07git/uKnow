var iA = function () {

  var utils = {
    /** function annotation
     * @fragmentFromString {  change htmlStr to [object DocumentFragment]
     * }
     */
    fragmentFromString: function (htmlStr) {
      // console.log(htmlStr)
      return document.createRange().createContextualFragment(htmlStr)
    },

    objectType: function (obj) {
      return Object.prototype.toString.call(obj).slice(8, -1)
    }
  }

  var cache = {
    ttl: 60 * 60 * 1000,
    /** function annotation
     * @getItem {  change htmlStr to [object DocumentFragment
     * "timestamp":1569528942146,"data":{"success":true,"htmlStr": <div> </div>]
     * from localStorage
     * }
     */
    getItem: function (key) {
      try {
        var str = localStorage.getItem(key)
        console.log("localStorage: is a dict, index the key, return a sting of Dict" + localStorage)
        console.log("key:" + key)
        console.log("str:" + str)
        var obj = JSON.parse(str)
        // window.dict= obj
//         window.dict == 
//         data: {success: true, htmlStr: "<div xmlns="http://www.w3.org/1999/xhtml" id="read…e diagram</li>↵</ul>↵</li>↵</ul>↵</article></div>"}
// timestamp: 1569528942146

        // console.log("obj:" + obj.data)
        var timestamp = Date.now()

        if (obj.timestamp > 0 && obj.timestamp + this.ttl > timestamp) {
          return obj.data
          
        } else {
          return undefined
        }
      } catch (err) {
        return undefined
      }
    },

    setItem: function (key, data) {
      var timestamp = Date.now()

      var str = JSON.stringify({
        timestamp: timestamp,
        data: data
      })

      localStorage.setItem(key, str)
    }
  }

  var gitHub = {
    hrefToOrgRepo: function (href) {
      console.log(href)
      // var match = href.match(/github\.com\/(.*)\/(.*)\/?$/)
      var match = href.match(/github\.com\/(.*)\/(.*)\/?(\/\w*\/master)\/(.*)/)
      var path = match[4]

      var org = match[1]
      var repo = match[2]
      console.log("path,org,repo:"+ path +'###'+ org  +'###' + repo)

      // https://github.com/jinsanity07git/uKnow
      // {
      //   org: jinsanity07git,
      //   repo: uKnow
      // }
      return {
        org: org,
        repo: repo  ,
        path:path ,
      }
    },

    makeAbsolute: function (baseUrl, url) {
      var currentUrl = window.location.href.replace(window.location.hash, '')
      if (url.startsWith(currentUrl)) {
        return url.replace(currentUrl, baseUrl)
      }

      return url
            // console.log("makeAbsolute:" + url)
    },

    fixRelativeLinks: function (org, repo,path, html) {
      if (html) {
        var baseUrl = 'https://raw.githubusercontent.com/' + org + '/' + repo + '/master/' + path
        console.log("baseUrl:" + baseUrl)

        //  https://raw.githubusercontent.com/jinsanity07git/uKnow/master/README.md
        var srcs = html.querySelectorAll('*[src]')
        for (var i = 0; i < srcs.length; ++i) {
          srcs[i].src = this.makeAbsolute(baseUrl, srcs[i].src)
        }

        var hrefs = html.querySelectorAll('*[href]')
        for (var i = 0; i < hrefs.length; ++i) {
          hrefs[i].href = this.makeAbsolute(baseUrl, hrefs[i].href)
          // console.log( "hrefs:" +    hrefs[i])
        }
        // console.log("fixRelativeLinks_html:" + html)
        // console.log( "srcs[0]:" +   srcs[0])
        // console.log( "hrefs[0]:" +   hrefs[0])
        // console.log( "hrefs[1]:" +   hrefs[1])
        // console.log( "hrefs[2]:" +   hrefs[2])
        // console.log( "hrefs[3]:" +   hrefs[3]);
        // console.log( "hrefs[3]:" +   hrefs[3]);
      }
      
      return html

    },

    getReadme: function (org, repo,path) {
      if (repo === undefined) {
        var orgRepo = this.hrefToOrgRepo(org)
        org  = orgRepo.org
        repo = orgRepo.repo
        path = orgRepo.path
      }

      var _this = this
      
      return new Promise(function (resolve, reject) {
        var contents

        // var apiUrl = 'https://api.github.com/repos/' + org + '/' + repo + '/readme'
        var apiUrl = 'https://api.github.com/repos/' + org + '/' + repo + '/contents/'  + path

        // var apiUrl_Con = 'https://api.github.com/repos/' + org + '/' + repo + '/readme'
        // the api should be accessible 
        //  getItem from api
        var data = cache.getItem(apiUrl)
        console.log("apiUrl : " +  apiUrl)
        console.log("data : " + data)
        window.data = data

        // console.log("data htmlStr: " + data.htmlStr)
        if (data && data.success && data.htmlStr) {
        // The Promise.resolve() method returns a Promise object that is resolved with a given value.
          resolve(_this.fixRelativeLinks(org, repo,path, utils.fragmentFromString(data.htmlStr)))
          // console.log(apiUrl)
          // console.log(org,repo)
          console.log( "if html : "+   data.htmlStr)
          // console.log("utils:" + utils.fragmentFromString(data.htmlStr))
          window.htmStr = utils.fragmentFromString(data.htmlStr)
          // console.log("fixRelativeLinks:" + _this.fixRelativeLinks(org, repo, utils.fragmentFromString(data.htmlStr)))
          // console.log(data)
        } else if (data && !data.success) {
          reject(data.error)
        } else {
          console.log("else_html:    "  + apiUrl)
          d3.html(apiUrl)
            .header('Accept', 'application/vnd.github.VERSION.html')
            .get(function(err, html) {
              if (err) {
                var errorMessage = 'Error loading README file from GitHub API'

                try {
                  var response = JSON.parse(err.currentTarget.response)
                  var status = err.currentTarget.status

                  errorMessage = errorMessage + ': ' + response.message + ' (' + status + ')'
                } catch (e) {
                }
                //  setItem() before getitem()
                // 需要清除缓存来实现新功能
                cache.setItem(apiUrl, {
                  success: false,
                  error: errorMessage
                })
                reject(errorMessage)
              } else {
                //  if get request success
                console.log("html: "+ html)
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
        }
      })
    }
  }

  var architecture = {
    currentPopupHref: undefined,

    popupHtml: '' +
      '<div class="interactive-architecture-popup arrow-box hidden">' +
      '  <div class="interactive-architecture-popup-link">' +
      '    <a href="" target="_blank">Open this link in a new window</a>' +
      '  </div>' +
      '  <div class="interactive-architecture-popup-contents">' +
      '  </div>' +
      '</div>',

    getPopupLocation: function (element) {
      var rect = element.getBoundingClientRect()

      return {
        x: window.scrollX + rect.left + rect.width / 2,
        y: window.scrollY + rect.bottom + 5
      }
    },

    createBadge: function (svg, link, number) {
      var bbox = link.getBBox()
      var radius = 18

      var badge = d3.select(svg).append('g')
        .attr('class', 'badge')

      badge.append('circle')
        .attr('cx', bbox.x + bbox.width)
        .attr('cy', bbox.y)
        .attr('r', radius)

      var transform = 'translate(' +
        Math.round(bbox.x + bbox.width) + ' ' +
        Math.round(bbox.y + radius / 2 - 1) +
        ')'
      badge.append('text')
          .attr('transform', transform)
          .html(number)
    },

    popupStyle: undefined,

    getPopupStyle: function (width, diffX) {
      var left = Math.round((width / 2 + diffX) / width * 100)
      return '' +
        '.interactive-architecture .arrow-box:after, \n' +
        '.interactive-architecture .arrow-box:before {\n' +
        '  left: ' + left + '%;\n' +
        '}\n'
    },

    createPopup: function (svg, href, location, contents) {
      this.hidePopup()

      this.currentPopupHref = href

      var parentNode = svg.parentNode

      var fragment = utils.fragmentFromString(this.popupHtml)
      parentNode.appendChild(fragment)

      var popup = parentNode.querySelector('.interactive-architecture-popup')
      this.popup = popup

      var popupStyle = window.getComputedStyle(popup)
      var popupWidth = parseInt(popupStyle.width.replace('px', ''))

      location.x -= Math.round(popupWidth / 2)

      // TODO: make padding configurable
      var padding = 10
      var minX = padding
      var maxX = document.body.clientWidth - padding - popupWidth
      var diffX = 0

      if (location.x < minX) {
        diffX = location.x - minX
        location.x = minX
      } else if (location.x > maxX) {
        diffX = location.x - maxX
        location.x = maxX
      }

      if (!this.popupStyle) {
        this.popupStyle = document.createElement('style')
        document.head.appendChild(this.popupStyle)
      }
      this.popupStyle.innerHTML = this.getPopupStyle(popupWidth, diffX)

      d3.select(popup)
        .classed('hidden', false)
        .style('left', location.x + 'px')
        .style('top', location.y + 'px')

      // Set href of README link
      popup.querySelector('.interactive-architecture-popup-link a').href = href

      var popupContents = popup.querySelector('.interactive-architecture-popup-contents')
      var contentsType = utils.objectType(contents)

      if (contentsType === 'DocumentFragment') {
        popupContents.appendChild(contents)
      } else {
        popupContents.innerHTML = contents
      }
    },

    hidePopup: function () {
      if (this.popup) {
        this.popup.remove()
        this.popup = undefined
      }
      this.currentPopupHref = undefined
    },

    create: function (container, svgUrl, userConfig, callback) {
      var _this = this
      console.log(_this)
      var defaultConfig = {
        element: 'path',
        getHref: function (link) {
          return link.getAttribute('xl:href')
        },
        getPopupContents: function (href, link) {
        },
        getBadgeNumber: function (href, link) {
        }
      }

      var config = Object.assign({}, defaultConfig, userConfig)

      d3.xml(svgUrl, function (err, doc) {
        if (err) {
          console.error('Failed loading architecture diagram: ' + svgUrl)
          if (callback) {
            callback(err)
          }

          return
        }

        var svg = doc.querySelector('svg')

        // Set SVG height & width
        svg.removeAttribute('height')

        // Append SVG document to HTML
        var containerElement = document.querySelector(container)

        containerElement.classList.add('interactive-architecture')
        containerElement.appendChild(doc.documentElement)

        // Remove all elements with white background (just leaving the outline)
        var whiteElements = svg.querySelectorAll('[fill="white"]')
        svg.style.fill = 'none'
        Array.prototype.forEach.call(whiteElements, function (element) {
          element.parentNode.removeChild(element)
        })

        // Remove title elements, they cause annoying mouse tooltips
        var titles = svg.querySelectorAll('title')
        Array.prototype.forEach.call(titles, function (element) {
          element.parentNode.removeChild(element)
        })

        var links = svg.querySelectorAll('a')
        console.log(links)
        Array.prototype.forEach.call(links, function (link) {
          var href = config.getHref(link)

          link.addEventListener('click', function (event) {
            event.stopPropagation()
            event.preventDefault()

            if (_this.currentPopupHref !== href) {
              _this.hidePopup()
              var contents = config.getPopupContents(href, link)
              // console.log("contents")
              // console.log(contents)
              var contentsType = utils.objectType(contents)
              // console.log("content types")
              // console.log(contentsType)
              if (contentsType === 'Promise') {
                contents
                  .then(function (contents) {
                    _this.createPopup(svg, href, _this.getPopupLocation(link), contents)
                    // console.log(_this.createPopup(svg, href, _this.getPopupLocation(link), contents))
                  })

                  // createPopup for each md link
                  .catch(function (err) {
                    var message = err || err.message
                    var errorContents = '<span class="interactive-architecture-popup-error">' +
                      message + '</span>'
                    _this.createPopup(svg, href, _this.getPopupLocation(link), errorContents)
                  })
              } else {
                _this.createPopup(svg, href, _this.getPopupLocation(link), contents)
              }
            } else {
              _this.hidePopup()
            }
          })

          var badgeNumber = config.getBadgeNumber(href, link)
          if (badgeNumber !== undefined && badgeNumber !== null) {
            this.createBadge(svg, link, badgeNumber)
          }
        })

        if (callback) {
          callback()
        }
      })

      document.addEventListener('click', function () {
        _this.hidePopup()
      })
    }
  }

  return {
    utils: utils,
    cache: cache,
    gitHub: gitHub,
    architecture: architecture
  }
}()
