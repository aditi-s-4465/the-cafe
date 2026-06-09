import './Menu.css';

const menuItems = [
    ["Not Board", "Won Most Ready to Ship Product to Market! I conducted UX research and developed the Frontend for a fullstack application to help streamline board game nights with tracking, inventory and recommendation systems.", "https://github.com/aditi-s-4465/notboard", "https://notboard-cee1dc.gitlab.io/"],
    ["CYBR", "Can you beat randomness? Designed and developed a game for Dr. Kit Clement and the CATALST statistics curriclum. This game is played by hundereds of students taking STAT 200 at UIUC evey semester", "https://github.com/aditi-s-4465/CYBR", "https://beatrandomness.web.illinois.edu/"],
    ["Fruit Cutter", "Get fit and have fun! I spearheaded development for a fruit ninja like game built on React.js and tensorflow.js that let 400+ users play a fun and interactive game using their web camera", "https://github.com/sigchi-uiuc/interactive-game"],
    ["Rhythmic React", "Play the perfect music for your workout. I lead a team to develop, design and implement an app that chooses music to play based on real time user movement speeds.", "https://github.com/sigchi-uiuc/music-step-sync", ""],
    ["Spaced Out", "Check up on and find study spots on campus. I worked with a team to develop, design, prototype and implement a mobile-friendly web app which takes real time data about campus to help students find the perfect place to study.", "https://github.com/zojize/SpacedOut", "https://illinois-spaced-out.vercel.app/list"],
    ["Melodic Eyes", "Adding another dimension to art by playing chords based on where a user is looking. I designed and helped implement a frontend that would work with a mouse as well as an eyetracker", "https://github.com/sigchi-uiuc/interactive-art", "https://interactiveart.web.illinois.edu/"],
]

function Menu() {
    return (
      <div className="brick-container">
        <div className='beam-container'>
            <div className='transparent-title '>
                <div className='pixel-title'><b>A Curated Menu</b> <p>(Some Projects I&apos;ve Worked On)</p></div>
            </div>
            <div className='transparent-container'>
            {menuItems.map(([title, description, github, website], index) => (
              <div className="menu-item" key={index}>
                <h3 className="menu-title">{title}</h3>
                <p className="menu-description">{description}</p>
                {github ? (
                  <a className="menu-description" href={github} target="_blank" rel="noopener noreferrer">{github}</a>
                ) : null}
                {website ? (
                  <a className="menu-description" href={website} target="_blank" rel="noopener noreferrer">{website}</a>
                ) : null}
              </div>
            ))}
            </div>
        </div>
      </div>
      );
}
export default Menu;