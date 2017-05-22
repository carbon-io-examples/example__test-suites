var carbon = require('carbon-io')
var __ = carbon.fibers.__(module)
var _o = carbon.bond._o(module)
var o = carbon.atom.o(module).main
var assert = require('assert')

/**************************************************************************
 * NotTests
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
    name: 'NotTests',

    /**********************************************************************
     * description
     */
    description: 'Not tests',

    /**********************************************************************
     * doTest
     */
    doTest: function() {
      assert(!true == false)
      assert(!false == true)
    }
    
  })
})
