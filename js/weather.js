var weatherContainer = document.querySelector('div.border-box.header-content.has-first-screen')
var weather = document.createElement('div')
weather.setAttribute('id','he-plugin-simple')
weather.setAttribute('class', 'left border-box')

var weatherScript = document.createElement('script')
weatherScript.src = 'https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0'
weather.appendChild(weatherScript)
// weatherContainer.prepend(weather)

var tarDiv = weatherContainer.children[1]
weatherContainer.insertBefore(weather, tarDiv)

WIDGET = {
    "CONFIG": {
      "modules": "01234",
      "background": "5",
      "tmpColor": "FFFFFF",
      "tmpSize": "12",
      "cityColor": "FFFFFF",
      "citySize": "12",
      "aqiColor": "FFFFFF",
      "aqiSize": "12",
      "weatherIconSize": "18",
      "alertIconSize": "14",
      "padding": "10px 10px 10px 10px",
      "shadow": "1",
      "language": "auto",
      "borderRadius": "10",
      "fixed": "false",
      "vertical": "center",
      "horizontal": "left",
      "key": "2928a86852eb49a2b95f96a3eb475d17"
    }
  }

