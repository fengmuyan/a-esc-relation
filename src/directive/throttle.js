const throttle = {}
throttle.install = Vue => {
  Vue.directive('throttle', {
    inserted: function (el, binding) {
      const { time = 1000, callback, params = [] } = binding.value
      el.callback = callback
      el.time = time
      el.params = params
      el.addEventListener('click', () => {
        const nowTime = new Date().getTime()
        if (!el.preTime || nowTime - el.preTime > el.time) {
          el.preTime = nowTime
          el.callback.call(this, ...el.params)
        }
      })
    },
    update: function (el, binding) {
      const { callback, time = 1000, params = [] } = binding.value
      el.callback = callback
      el.time = time
      el.params = params
    }
  })
}

export default throttle

