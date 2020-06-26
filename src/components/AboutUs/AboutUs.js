import React from 'react';
import Portrait from './Portrait';
import './AboutUs.css'

const AboutUs = () => {

    const team = [
        {
            name: 'Johanna',
            description:'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum',
            portrait:'johanna.png',
            linkedin:'',
            facebook:'',
            instagram:'',
        },
        {
            name: 'Pierre',
            description:'Passioné de développement web, j\'aime aussi lire des romans de fantasy, nager, jouer au badminton, et passer du temps avec mes amis !',
            portrait:'pierre.jpg',
            linkedin:'https://www.linkedin.com/in/pierre-velluet/',
            facebook:'',
            instagram:'',
        },
        {
            name: 'Gregory',
            description:'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum',
            portrait:'greg.jpeg',
            linkedin:'',
            facebook:'',
            instagram:'',
        },
        {
            name: 'Benoit',
            description:'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum',
            portrait:'benoit.jpg',
            linkedin:'',
            facebook:'',
            instagram:'',
        },
        {
            name: 'Thomas',
            description:'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum',
            portrait:'thomas.png',
            linkedin:'',
            facebook:'',
            instagram:'',
        }
    ]
    return (
        <div className={'PortraitContainer'}>
        <h2>L'équipe de docto-dino</h2>
        <div className='AllPortrait'>
            {team.map(element =>
                    <Portrait
                        name={element.name}
                        description={element.description}
                        portrait={require(`../../img/${element.portrait}`)}
                        facebook={element.facebook}
                        linkedin={element.linkedin}
                        instagram={element.instagram}
                    />)}
        </div>
            
        </div>
    )
}

export default AboutUs