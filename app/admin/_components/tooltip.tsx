import React from 'react'

const Tooltip = () => {
    return (
        < div className='drop-shadow-[0_0_5px_rgba(0,0,0,0.20)] w-32 flex absolute -top-2 z-10 -left-14 flex-col items-center  mt-10 rounded' >
            <div className='bg-white w-4 h-4 absolute rotate-45 -top-1'></div>
            <div className='bg-white rounded text-sm font-medium py-4 px-6 flex flex-col items-start z-10 gap-2'>
                <button className='text-slate-600 hover:text-slate-700'>Edit draft</button>
                <button className='text-red-400 hover:text-red-500'>Delete draft</button>
            </div>
        </div >
    )
}

export default Tooltip
