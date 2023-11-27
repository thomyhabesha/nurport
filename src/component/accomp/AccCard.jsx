import React from 'react'

function AccCard({items}) {
  return (
    <div className='acc_card'>
<img src={items.img}/>
<p>{items.text}.</p>
    </div>
  )
}

export default AccCard