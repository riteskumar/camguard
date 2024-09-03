'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => {
    return (
        <div className='flex flex-row'>
            <a href="https://github.com/riteskumar" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            
        </div>
    );
};

export default SocialMediaLinks;