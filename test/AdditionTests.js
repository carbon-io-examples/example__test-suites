var carbon = require('carbon-io')
var __ = carbon.fibers.__(module)
var _o = carbon.bond._o(module)
var o = carbon.atom.o(module).main
var assert = require('assert')

/**************************************************************************
 * AdditionTests
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
    name: 'AdditionTests',

    /**********************************************************************
     * description
     */
    description: 'Addition tests',

    /**********************************************************************
     * doTest
     */
    doTest: function() {
      assert(1 + 0 == 1)
      assert(2 + 3 == 5)
    }
    
  })
})
