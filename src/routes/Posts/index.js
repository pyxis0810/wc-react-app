module.exports.default = module.exports = {
  path: 'posts',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Posts'))
    })
  },

  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/Upload')
      ])
    })
  }
}
