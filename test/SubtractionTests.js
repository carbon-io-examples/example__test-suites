var carbon = require('carbon-io')
var __ = carbon.fibers.__(module)
var _o = carbon.bond._o(module)
var o = carbon.atom.o(module).main
var assert = require('assert')

/**************************************************************************
 * SubtractionTests
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
    name: 'SubtractionTests',

    /**********************************************************************
     * description
     */
    description: 'Subtraction tests',

    /**********************************************************************
     * doTest
     */
    doTest: function() {
      assert(1 - 1 == 0)
      assert(2 - 3 == -1)
    }
    
  })
})
