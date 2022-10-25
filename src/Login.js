import React, { useContext, useState } from 'react'

// import AppContext from '../Context/AppContext/AppContext'

export default function Login() {
    // const appContext=useContext(AppContext)

    // let[userName,setUserName]=useState("")
    // let[password,setPassword]=useState("")

    // function checkLogin(){
    //     if((userName===appContext.db.storedusername)&(password===appContext.db.storedpassword))
    //     {
    //         alert("Login Sucessfull")
    //         appContext.setUserLoggedIn(true)
    //     }
    //     else{
    //         alert("Enter correct credentials")
    //         appContext.setUserLoggedIn(false)
    //     }

    // }
  return (
    <div className=" flex flex-col h-screen justify-center space-y-5 bg-gradient-to-t from-pink-400 to-purple-300 opacity-100 " >
        {/* <div> */}
        
            <div className=' bg-blue-300 max-w-2xl mx-auto border border-black rounded-lg shadow-lg'>
            
            <p className='text- text-[30px] font-bold border-spacing-9 py-5  '>Login in to your account</p>
            
            </div>

            <center>
            <input className='w-96 p-2 px-3 bg-blue-300 border border-black outline-none rounded-lg text-black hover:bg-white shadow-lg transition-all'  type="text" placeholder="username" />
            </center>
        {/* </div> */}

        <div>
           <center>
          <input className='w-96 p-2 px-3 bg-blue-300 border border-black outline-none rounded-lg text-black  hover:bg-white shadow-lg transition-all ' type="password" placeholder="password" />
          </center>
        </div>
        <center>
        <button className='w-60 p-2 px-3 bg-blue-300 border border-black outline-none rounded-lg text-black border-spacing-10 hover:bg-white transition-all hover:text-black shadow-lg  ' type="submit" >Submit</button>
        </center>
        </div>
    



    
  

  )
}