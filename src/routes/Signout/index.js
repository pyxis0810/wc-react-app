module.exports = {
  path: 'signout',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Signout'))
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
