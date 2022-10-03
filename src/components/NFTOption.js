import React from 'react'


export default function NFTOption({ action, path, Icon, description }) {

  return (
    <>
      <div className='square ms-3'>
        {Icon}
      </div>
      <div className='opt-action mt-2'>
        <a href={path}>{action}</a>
      </div>
      <div className='mt-1 opt-desc'>
        {description}
      </div>
    </>
  )
}
