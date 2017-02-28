module.exports = {
  path: 'signin',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Signin'))
    })
  },

  // getChildRoutes(partialNextState, cb) {
  //   require.ensure([], (require) => {
  //     cb(null, [
  //       require('./routes/Announcements'),
  //       require('./routes/Assignments'),
  //       require('./routes/Grades')
  //     ])
  //   })
  // }
}
