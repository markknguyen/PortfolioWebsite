import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import "./Sweet.css"

export default function Sweet() {
    return (
        <>
            <div class="sweet">
                <h1>SweetDeals</h1>
                <div class="sweet-container">
                    <div>
                    <p2>Inspired by popular social media and online marketplaces, we designed <b>Sweetdeals</b>, a user-friendly mobile app for trading Halloween candy. Through <b>Sweetdeal</b>, users can browse candy listings, propose trades, and manage their personal candy stash. Built using <b>Flutter</b> and <b>Dart</b>, our development process involved pair-programming through <b>Duckly</b> and utilized <b>Dartpad</b> for previews and <b>GitHub</b> for version control. The project commenced with team brainstorming, collaborative tools setup, framework decisions, role delegation, and then moved into interface mapping and programming.</p2>
                    <div>
                        <Button 
    variant="dark" 
    href="https://github.com/Dodhon/DemonHacks2022" 
    target="_blank"
    style={{ fontSize: '2rem' }}  // Adjusting font size to fit container
>
<FontAwesomeIcon className="github-icon" icon={faGithub} />
</Button>
                        </div>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/FT_2f0RwoIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                </div>
            </div>
        </>
    );
}