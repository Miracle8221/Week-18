import React from 'react'
import Button from './Button'


function Article() {
  return (
    <div className='articleHeading'>
        <div className='serviceD'>
            <h3 className='servicesHead'>Check out our latest article</h3>
            <div className='line'></div>
        </div>
        <div className='article'>
        <div className="max-w-sm w-80 bg-white border  border-gray-200 rounded-2xl shadow-lg shadow-blue-500/50 dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="./src/assets/Images/image5.png" alt="" />
            </a>
        <div className="p-5">
            <h5 className="mb-2 mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Disease detection, check up in the laboratory</h5>
        
            <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">In this case, the role of the health laboratory is very important to do a disease detection...</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue  hover:bg-blue-800 mt-6">
                Read more
                <svg className=" w-3.5 h-3.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
        </div>
        <div className="max-w-sm w-80 bg-white border  border-gray-200 rounded-2xl shadow-lg shadow-blue-500/50 dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="./src/assets/Images/image6.png" alt="" />
            </a>
            <div className="p-5">
                <h5 className="mb-2 mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Disease detection, check up in the laboratory</h5>
                <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">In this case, the role of the health laboratory is very important to do a disease detection...</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue  hover:bg-blue-800 mt-6">
                    Read more
                    <svg className=" w-3.5 h-3.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            </div>
        <div className="max-w-sm w-80 bg-white border  border-gray-200 rounded-2xl shadow-lg shadow-blue-500/50 dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src="./src/assets/Images/image7.png" alt="" />
        </a>
        <div className="p-5">
                <h5 className="mb-2 mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Disease detection, check up in the laboratory</h5>
            
            <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">In this case, the role of the health laboratory is very important to do a disease detection...</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue  hover:bg-blue-800 mt-6">
                Read more
                <svg className=" w-3.5 h-3.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
        </div>
    </div>
    <img src="./src/assets/Images/element1.svg" className='elementI' alt="" />
    <img src="./src/assets/Images/element.png" className='articleFrame' alt="" />
    <Button>learn more </Button>
    </div>
  )
}

export default Article