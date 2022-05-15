import React from 'react';


export const Navbar = () => {
    return (

        <div id="header">            
                <p id="title">Full Stack Web Developer</p>     
                <h1 id="name">Stuart Wood</h1>
                <ul class="navlinks">
                    <li class="navlink"><a href='/'>About Me</a></li>
                    <li class="navlink"><a href='/mywork'>My Work</a></li>
                    <li class="navlink"><a href='/contact'>Contact Me</a></li>                 
                </ul>         
        </div>
    )
}

export default Navbar;