import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards.jsx'
import { Link } from 'react-router-dom'

function Book() {
    return (
        <>
            <div className='max-w-screen-xl container mx-auto md:px-20 px-4'>
                <div className=' mt-16 items-center justify-center text-center space-y-5 '>
                    <h1 className=' text-2xl md:text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, iste?</h1>
                    <p className=' font-medium'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dicta illum, ipsam ex cupiditate exercitationem totam tenetur eligendi officia perferendis cum quod ullam quas sapiente eum accusamus asperiores reiciendis fugit.
                    </p>
                    <Link to='/'>
                        <button className=' bg-purple-600 rounded-md px-5 py-3 mt-3 text-white hover:bg-purple-400 duration-200'>
                            Back
                        </button>
                    </Link>
                </div>
                <div className=' mt-3 grid grid-cols-1 md:grid-cols-3'>
                    {
                        list.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Book