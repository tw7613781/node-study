(function () {
  function loadJS (url, success) {
    var domScript = document.createElement('script')
    domScript.src = url
    domScript.onload = domScript.onreadystatechange = function () {
      if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
        success && success()
        this.onload = this.onreadystatechange = null
        this.parentNode.removeChild(this)
      }
    }
    document.getElementsByTagName('head')[0].appendChild(domScript)
  }

  loadJS('https://static001.geekbang.org/static/js/manifest.2243e6627b7cf4140cd6.js', function () {
    loadJS('https://static001.geekbang.org/static/js/vendor.c09014d4529b2079d3e7.js', function () {
      loadJS('https://static001.geekbang.org/static/js/app.1082661e63d0bb177e35.js')
    })
  })
})()

