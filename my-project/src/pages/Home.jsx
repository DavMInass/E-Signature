import { useState } from "react"
import { useAuth } from "../hooks/useAuth";

export const HomePage = () => {
    const {logout} =useAuth();
    const [fName,setfName] =useState('');
    const [lName,setlName] =useState('');
    const [description,setDescription] =useState('');
    const [email,setEmail] =useState('');
    const handleSubmit = async  (e)=>{
      e.preventDefault();
      console.log(1);
      const response = await fetch('http://127.0.0.1:5000/documents/template', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, first_name:fName,last_name:lName,description ,callback_url: "http://localhost/"}),
    })
    const data = await response.json();
      window.open(data.redirect_url,"_blank")
  }
    return(<div>
      <form className="space-y-6" onSubmit={handleSubmit}>
            <input
                  id="fName"
                  name="fName"
                  type="string"
                  required
                  value={fName}
                  placeholder="First Name"
                  onChange={(e)=>setfName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            <input
                  id="lastName"
                  name="string"
                  value={lName}
                  type="string"
                  placeholder="Last Name"
                  onChange={(e)=>setlName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <input
                  id="email"
                  name="string"
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e)=>setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <input
                  id="description"
                  name="string"
                  type="string"
                  required
                  value={description}
                  placeholder="description"
                  onChange={(e)=>setDescription(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Submit

              </button>
              </form>
        <input type="button" value="Log Out" onClick={(e)=>logout()} />
    </div>)
    }
