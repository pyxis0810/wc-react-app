module.exports = {
  path: 'signup',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Signup'))
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
