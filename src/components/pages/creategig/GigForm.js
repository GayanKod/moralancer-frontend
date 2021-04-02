import React, {useState} from 'react'
import './GigForm.css'
import {useForm} from 'react-hook-form'
import {Select} from 'react-dropdown-select'
import axios from "axios";


export default function GigForm() {

    //Create States for getting data
    const [gigTitle, setgigTitle] = useState("");
    const [gigCategory, setgigCategory] = useState("");
    const [gigSearchTags, setgigSearchTags] = useState("");
    const [gigBasicPriceDesc, setgigBasicPriceDesc] = useState("");
    const [gigBasicPrice, setgigBasicPrice] = useState("");
    const [gigStandardPriceDesc, setgigStandardPriceDesc] = useState("");
    const [gigStandardPrice, setgigStandardPrice] = useState("");
    const [gigPremiumPriceDesc, setgigPremiumPriceDesc] = useState("");
    const [gigPremiumPrice, setgigPremiumPrice] = useState("");
    const [gigDesc, setgigDesc] = useState("");
    const [gigReq, setgigReq] = useState("");

    function SendGigData(e) {
        e.preventDefault();

        const newGig = {
            
            gigTitle,
            gigCategory,
            gigSearchTags,
            gigBasicPriceDesc,
            gigBasicPrice,
            gigStandardPriceDesc,
            gigStandardPrice,
            gigPremiumPriceDesc,
            gigPremiumPrice,
            gigDesc,
            gigReq

        }

        axios.post("http://localhost:8070/gigs/create", newGig).then(() => {
            window.location.href='/Gigs'
            alert("Gig Successfully Created");
        }).catch(() => {
            alert("Please check and fill the form correctly");
        })
        
    }
    
        

    //const { register, handleSubmit}=useForm();
   // const onSubmit =data => {console.log(data)}
   /* const Countries = [
        { label: "Graphic & Design", value:"Graphic & Design"},
        { label: "Writing & Tanslation", value:"Graphic & Design"},
        { label: "Video & Animation", value:"Graphic & Design"},
        { label: "Cocos Islands", value:"Graphic & Design"},
        { label: "Programming & Tech", value:"Graphic & Design" },
        { label: "Data"},
        { label: "Other" }
      ];*/


    return (
        <div className="create-new-gig">
           <form onSubmit={SendGigData} >
               <div className='overview'>
                <h1>Gig overview</h1>

               <input type='text' placeholder='Gig Title' name='Gig-Title' 
               onChange={(e) => {

                   setgigTitle(e.target.value);
               }}
               />

               <div className='select-container'>
               <select placeholder="Select Category"
               onChange={(e) => {

                    setgigCategory(e.target.value);
                }}
               >
               <option>--Select Category--</option>
               <option value="Graphic & Design" >Graphic & Design</option>
               <option value="Writing & Tanslation" >Writing & Tanslation</option>
               <option value="Video & Animation">Video & Animation</option>
               <option value="Programming & Tech">Programming & Tech</option>
               <option value="Data" >Data</option>
               <option value="Other" >Other</option>
               </select>  
                </div>


               <input type='text' placeholder='Search Tags' name='Search-tags' 
                    onChange={(e) => {

                        setgigSearchTags(e.target.value);
                    }}
               />
               
               </div>


               <div className="pricing">
                   <h1>Gig Pricing</h1>
                   <ul className="gig-list">

                       <li> <h4>Basic</h4>

                       <textarea cols="110" rows="5"  placeholder='Basic Pricing Description' name='Basic'
                           onChange={(e) => {

                                setgigBasicPriceDesc(e.target.value);
                        }}
                        ></textarea>
    

                       <input type='text' placeholder='Price' name='Basic-Price' 
                           onChange={(e) => {

                                setgigBasicPrice(e.target.value);
                        }}
                       />
                       </li>

                       <li> <h4>Standard</h4>

                        <textarea cols="110" rows="5" placeholder='Standard Pricing Description' name='Standard'
                           onChange={(e) => {

                                setgigStandardPriceDesc(e.target.value);
                        }}
                        ></textarea>

                       <input type='text' placeholder='Price' name='Standard-Price' 
                           onChange={(e) => {

                                setgigStandardPrice(e.target.value);
                        }}
                       />
                       </li>


                       <li> <h4>Premium</h4>

                        <textarea cols="110" rows="5" placeholder='Premium Pricing Description' name='Premium'
                           onChange={(e) => {

                                setgigPremiumPriceDesc(e.target.value);
                        }}
                        ></textarea>

                       
                       <input type='text' placeholder='Price' name='Premium-Price' 
                           onChange={(e) => {

                                setgigPremiumPrice(e.target.value);
                        }}
                       />
                       </li>
                   </ul>

               </div>
               <div className='description'>
                <h1>Gig description</h1>

                <textarea cols="110" rows="5" placeholder='Gig Description' name='Gig-description'
                    onChange={(e) => {

                                setgigDesc(e.target.value);
                        }}
                ></textarea>
               
               </div>
            
               <div className='requirements'>
                <h1>Gig requirements</h1>

                <textarea cols="110" rows="5" placeholder='Gig requirements' name='Gig-requirements'
                    onChange={(e) => {

                                setgigReq(e.target.value);
                        }}
                ></textarea>

               </div>
               <input type='submit' className="gig-submit"/>

           </form> 
        </div>
    )
}