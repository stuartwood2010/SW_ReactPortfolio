import React from 'react';


export const Navbar = () => {
    return (

        <div id="header">
            <div id="navHead">
                <h1 id="name">Stuart Wood</h1>
                <p id="title">Full Stack Web Developer</p>        
            </div>     
            <nav>
                <ul class="navlinks">
                <li class="links"><a href='/'>About Me</a></li>
                <li class="links"><a href='/mywork'>My Work</a></li>
                <li class="links"><a href='/contact'>Contact Me</a></li>                 
                </ul>
            </nav>          
        </div>
    )
}

export default Navbar;