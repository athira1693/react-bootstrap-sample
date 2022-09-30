import React from 'react'

export default function NFTOption({action,Icon,description}) {
  return (
    <>
    <div className='square ms-3'>
        {Icon}
    </div>
    <div className='opt-action mt-2'>
      {action}
    </div>
    <div className='mt-1 opt-desc'>
      {description}
    </div>
    </>
  )
}
