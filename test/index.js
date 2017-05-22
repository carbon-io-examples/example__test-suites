var carbon = require('carbon-io')
var __ = carbon.fibers.__(module)
var _o = carbon.bond._o(module)
var o = carbon.atom.o(module).main

/**************************************************************************
 * MathTests
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
    name: 'MathTests',

    /**********************************************************************
     * description
     */
    description: 'Math tests',

    /**********************************************************************
     * tests
     */
    tests: [
      _o('./ArithmeticTests'),
      _o('./LogicTests')
    ]
  })
})
