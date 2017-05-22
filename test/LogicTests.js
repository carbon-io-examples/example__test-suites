var carbon = require('carbon-io')
var __ = carbon.fibers.__(module)
var _o = carbon.bond._o(module)
var o = carbon.atom.o(module).main

/**************************************************************************
 * LogicTests
 */
__(function() {
  module.exports = o({

    /**********************************************************************
     * _type
     */
    _type: carbon.testtube.Test,
    
    /**********************************************************************
     * name
     */
    name: 'LogicTests',

    /**********************************************************************
     * description
     */
    description: 'Logic tests',

    /**********************************************************************
     * tests
     */
    tests: [
      _o('./AndTests'),
      _o('./OrTests'),
      _o('./NotTests')
    ]
  })
})
