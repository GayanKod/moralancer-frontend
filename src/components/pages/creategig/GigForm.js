import React from 'react'
import './GigForm.css'
import {useForm} from 'react-hook-form'
import {Select} from 'react-dropdown-select'

export default function GigForm() {
    const { register, handleSubmit}=useForm();
    const onSubmit =data => {console.log(data)}
    const Countries = [
        { label: "Graphic & Design"},
        { label: "Writing & Tanslation"},
        { label: "Video & Animation"},
        { label: "Cocos Islands"},
        { label: "Programming & Tech" },
        { label: "Data"},
        { label: "Other" }
      ];
    return (
        <div className="create-new-gig">
           <form onSubmit={handleSubmit(onSubmit)}>
               <div className='overview'>
                <h1>Gig overview</h1>
               <input type='text' placeholder='Gig Title' name='Gig-Title' ref={register}/>
               <div className='select-container'><Select options={Countries}  /> </div>
               <input type='text' placeholder='Search Tags' name='Search-tags' ref={register}/>
               
               </div>
               <div className="pricing">
                   <h1>Gig Pricing</h1>
                   <ul className="gig-list">
                       <li> <h4>Basic</h4>
                       <input type='text' placeholder='Basic Pricing Description' name='Basic' ref={register}/>
                       <input type='text' placeholder='Price' name='Basic-Price' ref={register}/>
                       </li>
                       <li> <h4>Standard</h4>
                       <input type='text' placeholder='Standard Pricing Description' name='Standard' ref={register}/>
                       <input type='text' placeholder='Price' name='Standard-Price' ref={register}/>
                       </li>
                       <li> <h4>Premium</h4>
                       <input type='text' placeholder='Premium Pricing Description' name='Premium' ref={register}/>
                       <input type='text' placeholder='Price' name='Premium-Price' ref={register}/>
                       </li>
                   </ul>
               </div>
               <div className='description'>
                <h1>Gig description</h1>
               <input type='text' placeholder='Gig Description' name='Gig-description' ref={register}/>
               </div>
               <div className='requirements'>
                <h1>Gig requirements</h1>
               <input type='text' placeholder='Gig requirements' name='Gig-requirements' ref={register}/>
               </div>
               <input type='submit' className="gig-submit"/>
           </form> 
        </div>
    )
}