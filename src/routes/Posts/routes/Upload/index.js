// import RequireAdmin from 'components/Admin';

module.exports.default = module.exports = {
  path: 'upload',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Upload'))
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
