import React from 'react';

function Cards({ item }) {
    return (
        <>
            <div className=' mx-4 my-4 p-1'>
                <div className="cardbg-base-100 shadow-xl hover:scale-105 duration-200 dark:border">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline text-black hover:bg-yellow-500 duration-100   ">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
