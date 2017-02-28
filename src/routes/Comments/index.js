module.exports.default = module.exports = {
  path: 'comments',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Comments'))
    })
  },

  // getChildRoutes(partialNextState, cb) {
  //   require.ensure([], (require) => {
  //     cb(null, [
  //       // require('./routes/Upload'),
  //       // require('./routes/Assignments'),
  //       // require('./routes/Grades')
  //     ])
  //   })
  // }
}
