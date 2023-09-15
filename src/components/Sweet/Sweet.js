import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import "./Sweet.css"

export default function Sweet() {
    return (
        <>
            <div class="sweet">
                <h1>Challenge with Friends</h1>
                <div class="sweet-container">
                    <div>
                    <p>A multiplayer game in which players compete to finish the most challenges to earn points and score high on the leaderboard.
                        I created the routes that allow players to make an account, create and join groups, create and claim challenges, upload pictures, and view group and global leaderboards.
                        I also implemented <b>relational databases</b> to store player information, groups, and challenges using <b>Python Flask</b> and <b>SQLalchemy.</b>
                        I built the <b>Docker container</b> and deployed the app to <b>Heroku cloud platform</b> to allow users to connect to the server and make API calls.</p>
                        <Button 
    variant="dark" 
    href="https://github.com/markknguyen/robot-wars" 
    target="_blank"
    style={{ fontSize: '2rem' }}  // Adjusting font size to fit container
>
<FontAwesomeIcon className="github-icon" icon={faGithub} />
</Button>

                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9pmiediDz-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                </div>
            </div>
        </>
    );
}