import React from "react";

function Contact() {    
    return (
    <div id="contactMe">
        <h2>Contact Info</h2>
        <ul class="contactLinks">
            <li class="contactLink">My Github Profile: <a class="link" target="blank" href="https://github.com/stuartwood2010">stuartwood2010</a></li>
            <li class="contactLink">My LinkedIn Profile: <a class="link" target="blank" href="https://www.linkedin.com/in/stuart-wood-web-development/">Stuart Wood</a></li>
            <li class="contactLink">My email: <a class="link" target="blank" href="mailto:codecowboy5280@gmail.com">codecowboy5280@gmail.com</a></li>
            <li class="contactLink">If you would like to view my resume you can view it <a class="link resume" target="blank" href="https://1drv.ms/b/s!AqdculNZj7JxlhMkr04k3oCRL4gA">here.</a></li>
        </ul>
    </div>
    )
}

export default Contact;