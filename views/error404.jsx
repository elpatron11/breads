const React = require('react')
const Default = require('./layouts/Default')

function error404 ()  {
    return (
   <Default>
  <h2>Error 404</h2>
  <p>Please try again</p>
  
</Default>
    )
}


module.exports = error404


