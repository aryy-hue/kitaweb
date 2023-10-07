'use client';
import React, {useState} from 'react';
import { collection, addDoc } from "firebase/firestore";
import {db} from 'src/app/firebase'

export default function PersonalInfoShow() {

        const [newData, setNewData] = useState({name: '', email: '', number: ''});
      
        // add item to database
        const addData = async (e) => {
          e.preventDefault();
          if(newData.name !== '' && newData.email !== '' && newData.number !== '') {
           await addDoc(collection(db, 'data'), {
            name : newData.name.trim(),
            email : newData.email.trim(),
            number : newData.number.trim(),
           })
          }
        }

    return (
        <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center scale-1 duration-150 -z-10">
            <form className="bg-white w-11/12 h-3/4 shadow-2xl rounded-3xl p-10 md:px-20 md:py-16">
                <h2 className="md:text-3xl text-lg font-bold md:mb-10">Personal Information</h2>
                <div className="md:w-11/12 mt-4">
                        <div className="flex flex-wrap items-center justify-between mb-5">
                            <label htmlFor="name">Name</label>
                            <input 
                            value={newData.name} 
                            onChange={(e) => setNewData({...newData, name: e.target.value})}
                            type="text" placeholder="Your Name" id="name" name="name" className="border-solid border-2 border-slate-300 outline-none rounded-md py-2 px-6 w-full md:w-9/12 xl:w-10/12 "/>
                        </div>
                        <div className="flex flex-wrap items-center justify-between mb-5">
                            <label htmlFor="email">Email</label>
                            <input
                            value={newData.email} 
                            onChange={(e) => setNewData({...newData, email: e.target.value})}
                            type="email" placeholder="Your Email" id="email" name="email" className="border-solid border-2 border-slate-300 outline-none rounded-md py-2 px-6 w-full md:w-9/12 xl:w-10/12"/>
                        </div>
                        <div className="flex flex-wrap items-center justify-between mb-5">
                            <label htmlFor="phone-number">Phone Number</label>
                            <input
                            value={newData.number} 
                            onChange={(e) => setNewData({...newData, number: e.target.value})} 
                            type="number" placeholder="Phone Number" id="phone-number" name="phone-number" className="border-solid border-2 border-slate-300 outline-none rounded-md py-2 px-6 w-full md:w-9/12 xl:w-10/12"/>
                        </div>
                        <div className="flex justify-center">
                            <input 
                            onClick={addData}
                            type="submit" className="bg-green-500 hover:bg-green-400 py-3 px-5 cursor-pointer rounded-md text-white mr-5"/>
                            <button className="bg-slate-400 hover:bg-slate-300 py-3 px-5 cursor-pointer rounded-md text-white mr-5">Cancel</button>
                        </div> 
                </div>
            </form>
        </div>
    )
}