import React from 'react'
import SubNavbar from '../../SubNavbar'
import './Myprofile.css';
import { Button } from '../../Button'
import { Link } from 'react-router-dom';
import avatar from '../../../assets/img/avatar.png'

function MyProfile() {
    return (
        <div className="myprofile-container">
            <SubNavbar/>
            <div className="row">
            <div className="profile-container">
                <div className="profile-img">
                <>
                <img alt="stack overflow" src={avatar}></img>
                </>
                </div>
                
                <div className="profile-btns">
            <Link to="/GigForm">
             <Button 
             className="btns"
             buttonStyle="btn--outline"
             buttonSize="btn--large">
                 Edit Profile
            </Button>
            </Link>
            </div>

            </div>
            <div className="profile-content"> 
                <div className="profile-user-name">
                <h3 className="title"> Your Name</h3>
                <h6 className="profession">Profession </h6>
                <div className="bio-description">
                    <p>An artist of considerable range, Chet Faker — the name taken by 
                        Melbourne-raised, Brooklyn-based Nick Murphy — writes, 
                        performs and records all of his own music, giving it a warm, 
                        intimate feel with a solid groove structure. </p>
                </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default MyProfile
