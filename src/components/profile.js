import React from 'react'
import './profile.css'
export default function Profile() {
    return (
        <div className="profile-wrapper">
            <h1 className="profile-title">Admin page</h1>
            <img className="avatar profile-image" src={require('../images/profile.jpg')}></img>
            <h2 className="profile-name">Meridja Nassim</h2>
            <p className="description">Full-stack developer</p>
        </div>
    )
}
