import React from 'react';
import './skills.css'
const Skills = () => {
  return (
    <section id="skills-list">
      <div className="skills">
        {/* Content for skills will go here */}
      </div>

      <div className="container-2">
        <div className="skills-text">
          <h1 className="about-header" style={{ textAlign: 'center', border: '5px solid black' }}>
            Skills
          </h1>
        </div>
        
        <section id="skills-img">
          <div className="skills-imgs">
            <h1 className="text-use">USING NOW:</h1>
            <div className="imgs-a">
              <div className="html5">
                <img src="src/assets/html5.svg" alt="HTML5" />
                <p>Html5</p>
              </div>
              <div className="css">
                <img src="src/assets/css.svg" alt="CSS" />
                <p>Css</p>
              </div>
              <div className="sass">
                <img src="src/assets/sass.svg" alt="Sass" />
                <p>Sass</p>
              </div>
              <div className="js">
                <img src="src/assets/js.svg" alt="JavaScript" />
                <p>Javascript</p>
              </div>
            </div>
            <div className="imgs-b">
              <div className="react">
                <img src="src/assets/React.svg" alt="React" />
                <p>React</p>
              </div>
              <div className="bootstrap">
                <img src="src/assets/bootsrap.svg" alt="Bootstrap" />
                <p>Bootstrap</p>
              </div>
              <div className="git">
                <img src="src/assets/git.svg" alt="Git" />
                <p>Git</p>
              </div>
              <div className="figma">
                <img src="src/assets/figma.svg" alt="Figma" />
                <p>Figma</p>
              </div>
            </div>
          </div>

          {/* LEARNING SECTION */}
          <div className="learning-grid">
            <h1>LEARNING:</h1>
            <div className="learning-grid-imgs">
              <div className="nodejs">
                <img src="src/assets/nodejs.svg" alt="NodeJs" />
                <p>NodeJs</p>
              </div>
              <div className="mysql">
                <img src="src/assets/sql.svg" alt="MySQL" />
                <p>MySQL</p>
              </div>
              <div className="mongodb">
                <img src="src/assets/mongodb.svg" alt="MongoDB" />
                <p>MONGODB</p>
              </div>
              <div className="ts">
                <img src="src/assets/ts.svg" alt="TypeScript" />
                <p>TYPESCRIPT</p>
              </div>
            </div>
          </div>

          <div className="learning-grid">
            <h1>LEARNING:</h1>
            <div className="learning-grid-imgs">
              <div className="nodejs">
                <img src="src/assets/Angielski.svg" alt="Angielski" />
                <p>ANGIELSKI</p>
                <span>C1/C2</span>
              </div>
              <div className="mysql">
                <img src="src/assets/Hispanski.svg" alt="Hispanski" />
                <p>HISZPANSKI</p>
                <span>B1/B2</span>
              </div>
              <div className="mongodb">
                <img src="src/assets/C++.svg" alt="C++" />
                <p>C++</p>
              </div>
              <div className="ts">
                <img src="src/assets/C.svg" alt="C" />
                <p>C</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Skills;
