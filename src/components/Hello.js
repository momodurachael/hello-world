import React from 'react'

const Hello = () => {
    // return (
    //  <div className='dummyclass'>
    //     <hi>Hello vishwas</hi>
    //  </div>
    // )
return React.createElement(
    'div',
     {id: 'hello', className: 'dummyclass'},
     React.createElement('h1', null, 'Hello vishwas')
     )
}

export default Hello