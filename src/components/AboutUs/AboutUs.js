import React from 'react';
import Portrait from './Portrait';
import './AboutUs.css'

const AboutUs = () => {

    const team = [
        {
            name: 'Johanna',
            description:'JS/REACT developper who loves reading, coding, play video games and spending time with my friends',
            portrait:'johanna.png',
            linkedin:'https://www.linkedin.com/in/johannadetrieux/',
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
            description:'Créatif et curieux de nature je m\'épanouis à souhait dans la programmation. Combiner et expérimenter sont mes principales sources de motivations mais chercher à comprendre anime aussi ma soif d\'approfondir.',
            portrait:'greg.jpeg',
            linkedin:'https://www.linkedin.com/in/gregory-chamekh/',
            facebook:'',
            instagram:'',
        },
        {
            name: 'Benoit',
            description:'Passioné de nouvelles technologies, je me tiens toujours à jour sur les dernières nouveautés ! Quand je code du html, je balise !',
            portrait:'benoit.jpg',
            linkedin:'',
            facebook:'',
            instagram:'',
        },
        {
            name: 'Thomas',
            description:'Persévérance, curiosité, esprit d\'équipe et autonomie, sont les qualités qui me caractérisent et dont je saurai vous faire profiter.',
            portrait:'thomas.png',
            linkedin:'https://www.linkedin.com/in/thomas-lachieze/',
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