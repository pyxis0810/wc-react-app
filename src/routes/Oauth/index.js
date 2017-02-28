module.exports.default = module.exports = {
  path: 'oauth',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Oauth'))
    })
  }
}
