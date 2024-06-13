
import { ReactElement } from 'react'
import { faLinkedin , faInstagram, faGithub, faMastodon } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(){

        return (
     
            <footer>
                <div className="social">
                    <a href="https://www.linkedin.com/in/sfmoe" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} /><span>Linkedin Moe Martinez</span></a>
                    <a href="https://instagram.com/sfmoe" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} /><span>Instagram @sfmoe</span></a>
                    <a href="https://github.com/sfmoe" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} /><span>Github SFMoe</span></a>
                    <a rel="me" href="https://mastodon.social/@sfmoe">
                    <FontAwesomeIcon icon={faMastodon} /><span>Mastodon</span></a>
                </div>
            </footer>
           
        );
}

