


document.getElementById('root').innerHTML = `
  <h1> Hello Vanilla! </h1>
  <div> 
    we use the same configuration
  </div>
`

function defaultParam(theParam = 'foo') {
    return theParam
  }
  console.log(defaultParam('bar'))

  let arr = [1,2,3,4,5,6,7,8,9]

  console.log(arr)
 console.log( arr.filter(em => em === 5))
 console.log( arr.filter(em => em.id === '5'))