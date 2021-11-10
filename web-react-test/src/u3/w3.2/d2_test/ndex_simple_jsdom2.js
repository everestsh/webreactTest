


document.getElementById('root').innerHTML = `
  <h1> Hello Vanilla! </h1>
  <div> 
    we use the same configuration
  </div>
`

function defaultParam(theParam = 'foo') {
    return theParam
  }
  console.log(defaultParam())