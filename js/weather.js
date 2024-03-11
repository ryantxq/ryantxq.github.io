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
      "tmpSize": "16",
      "cityColor": "FFFFFF",
      "citySize": "16",
      "aqiColor": "FFFFFF",
      "aqiSize": "16",
      "weatherIconSize": "24",
      "alertIconSize": "18",
      "padding": "10px 10px 10px 10px",
      "shadow": "0",
      "language": "auto",
      "fixed": "false",
      "vertical": "top",
      "horizontal": "left",
      "key": "d6ba0fe1db8a4a0caa5d20594c994135"
    }
  }

