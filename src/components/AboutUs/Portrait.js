import React from 'react';
import './Portrait.css'

const Portrait = (props) => {
    return (
        <div className='Portrait'>
            <img src={props.portrait} alt='portrait' />
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <div className='SocialNetworkContainer'>
                <a href={props.linkedin}><i className="fa fa-linkedin-square Social" aria-hidden="true"></i></a> 
                <a href={props.facebook}><i className="fa fa-facebook-square Social" aria-hidden="true"></i></a>
                <a href={props.instagram}><i className="fa fa-instagram Social" aria-hidden="true"></i></a>     
            </div>
            


        </div>
    )
}

export default Portrait