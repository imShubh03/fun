import React from 'react'

function Login() {
    return (
        <div>
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box dark:bg-slate-700 dark:text-white">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-center">Login</h3>

                    <div className=' flex items-center flex-col space-y-3 '>
                        {/* email */}
                        <label className="form-control w-full max-w-xs ">
                            <div className="label">
                                <span className="label-text dark:bg-slate-700 dark:text-white">What is your email?</span>
                            </div>
                            <input type="email" placeholder="your email" className="input input-bordered w-full max-w-xs dark:bg-slate-700 dark:text-white" />
                        </label>
                        {/* pass */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text dark:bg-slate-700 dark:text-white">What is your password?</span>
                            </div>
                            <input type="password" placeholder="password?" className="input input-bordered w-full max-w-xs dark:bg-slate-700 dark:text-white" />
                        </label>
                    </div>

                    {/* button */}
                    <div className='flex items-center flex-col space-y-3 mt-5'>
                        <button class="btn  bg-yellow-500 px-4 py-2">Login</button>
                        <p>
                            New user? <button onClick={() =>
                                document.getElementById("my_modal_3").showModal()
                            } className=' underline cursor-pointer'>Register</button>
                            <Login />
                        </p>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Login;