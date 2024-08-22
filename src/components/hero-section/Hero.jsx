import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <div>
     <section id="hero-section">
        <div className="hero-content">
            <h3>my name is Thomas</h3>
            <h1>I'M A DEVELOPER</h1>
            <div className="img">
                <img src="src/assets/line.svg" alt="Line decoration"/> 
            </div>
            <div className="link-icons">
                <div className="git">
                    <img src="src/assets/@.svg" alt="GitHub"/>
                    <img src="src/assets/git_2.svg" alt="Git"/>
                    <img src="src/assets/linkedIn.svg" alt="LinkedIn"/>
                </div>
            </div>
        </div>
     </section>
    </div>
  )
}

export default Hero;