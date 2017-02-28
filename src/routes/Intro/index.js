module.exports = {
  path: 'intro',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Intro'))
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
