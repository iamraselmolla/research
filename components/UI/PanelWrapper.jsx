import React from 'react'

const PanelWrapper = ({children}) => {
  return (
    <div className="p-3 pr-2 flex flex-col bg-lightBackground w-[100%] h-[100%]   md:pl-4 smrev:p-2">
    <div className='overflow-y-auto'>
    <div className="mr-4 p-1">
        {children}
    </div>
    </div>
    </div>
  )
}

export default PanelWrapper