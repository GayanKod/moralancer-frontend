import React, { useEffect, useImperativeHandle, useState } from 'react'
import { Button } from '../../Button';
import '../../GigView.css'
import { Link } from 'react-router-dom';
import axios from 'axios';



const EditGig = (props) =>{

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

    function GetGigData() {

        useEffect(() => {
            axios
                .get(`http://localhost:8070/gigs/get/${props.match.params.id}`)
                .then(res => [
                    setgigTitle(res.data.gig.gigTitle),
                    setgigCategory(res.data.gig.gigCategory),
                    setgigSearchTags(res.data.gig.gigSearchTags),
                    setgigBasicPriceDesc(res.data.gig.gigBasicPriceDesc),
                    setgigBasicPrice(res.data.gig.gigBasicPrice),
                    setgigStandardPriceDesc(res.data.gig.gigStandardPriceDesc),
                    setgigStandardPrice(res.data.gig.gigStandardPrice),
                    setgigPremiumPriceDesc(res.data.gig.gigPremiumPriceDesc),
                    setgigPremiumPrice(res.data.gig.gigPremiumPrice),
                    setgigDesc(res.data.gig.gigDesc),
                    setgigReq(res.data.gig.gigReq)
                ] ).catch(error => console.log(error));
    
        }, []);
        
    }

    function UpdateGigData(e) {
        e.preventDefault();

        const updateGig = {
            
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
    
        axios
            .put(`http://localhost:8070/gigs/update/${props.match.params.id}`,updateGig )
            .then(() => {
                window.location.href=`/Gigs/${props.match.params.id}`
                alert("Gig Successfully Updated");
            }).catch(() => {
                alert("Please check and fill the form correctly");
            })
        }

    GetGigData();

    return(
        <div className="create-new-gig">
           <form onSubmit={UpdateGigData} >
               <div className='overview'>
                <h1>Gig overview</h1>

               <input type='text' placeholder='Gig Title' name='Gig-Title' value={gigTitle}
               onChange={(e) => {

                   setgigTitle(e.target.value);
               }}
               />

               <div className='select-container'>
               <select placeholder="Select Category" value={gigCategory}
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


               <input type='text' placeholder='Search Tags' name='Search-tags' value={gigSearchTags}
                    onChange={(e) => {

                        setgigSearchTags(e.target.value);
                    }}
               />
               
               </div>


               <div className="pricing">
                   <h1>Gig Pricing</h1>
                   <ul className="gig-list">

                       <li> <h4>Basic</h4>

                       <textarea cols="110" rows="5"  placeholder='Basic Pricing Description' name='Basic' value={gigBasicPriceDesc}
                           onChange={(e) => {

                                setgigBasicPriceDesc(e.target.value);
                        }}
                        ></textarea>
    

                       <input type='text' placeholder='Price' name='Basic-Price' value={gigBasicPrice} 
                           onChange={(e) => {

                                setgigBasicPrice(e.target.value);
                        }}
                       />
                       </li>

                       <li> <h4>Standard</h4>

                        <textarea cols="110" rows="5" placeholder='Standard Pricing Description' name='Standard' value={gigStandardPriceDesc}
                           onChange={(e) => {

                                setgigStandardPriceDesc(e.target.value);
                        }}
                        ></textarea>

                       <input type='text' placeholder='Price' name='Standard-Price' value={gigStandardPrice}
                           onChange={(e) => {

                                setgigStandardPrice(e.target.value);
                        }}
                       />
                       </li>


                       <li> <h4>Premium</h4>

                        <textarea cols="110" rows="5" placeholder='Premium Pricing Description' name='Premium' value={gigPremiumPriceDesc}
                           onChange={(e) => {

                                setgigPremiumPriceDesc(e.target.value);
                        }}
                        ></textarea>

                       
                       <input type='text' placeholder='Price' name='Premium-Price' value={gigPremiumPrice}
                           onChange={(e) => {

                                setgigPremiumPrice(e.target.value);
                        }}
                       />
                       </li>
                   </ul>

               </div>
               <div className='description'>
                <h1>Gig description</h1>

                <textarea cols="110" rows="5" placeholder='Gig Description' name='Gig-description' value={gigDesc}
                    onChange={(e) => {

                                setgigDesc(e.target.value);
                        }}
                ></textarea>
               
               </div>
            
               <div className='requirements'>
                <h1>Gig requirements</h1>

                <textarea cols="110" rows="5" placeholder='Gig requirements' name='Gig-requirements' value={gigReq}
                    onChange={(e) => {

                                setgigReq(e.target.value);
                        }}
                ></textarea>

               </div>
               <input type='submit' className="gig-submit"/>

           </form> 
        </div>
    );
    
}

export default EditGig;