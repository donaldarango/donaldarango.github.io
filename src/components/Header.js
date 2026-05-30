import React, { Component } from 'react';
export default class Header extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // Fade In/Out Primary Navigation
    const header = document.querySelector('header');
    const nav = document.getElementById('nav-wrap');
    if (header && nav) {
      const h = header.offsetHeight;
      const y = window.scrollY;
      
      if (y > h * 0.20 && y < h && window.innerWidth > 768) {
        nav.style.opacity = '0';
        nav.style.pointerEvents = 'none';
      } else {
        nav.style.opacity = '1';
        nav.style.pointerEvents = 'auto';
        if (y < h * 0.20) {
          nav.classList.remove('opaque');
        } else {
          nav.classList.add('opaque');
        }
      }
    }

    // Highlight the current section
    const sections = ['home', 'about', 'portfolio'];
    let currentSection = 'home';
    const scrollPosition = window.scrollY + window.innerHeight * 0.35;

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el && el.offsetTop <= scrollPosition) {
        currentSection = section;
      }
    }

    const navigationLinks = document.querySelectorAll('#nav-wrap ul li');
    navigationLinks.forEach(li => li.classList.remove('current'));

    const activeLink = document.querySelector(`#nav-wrap a[href="#${currentSection}"]`);
    if (activeLink && activeLink.parentElement) {
      activeLink.parentElement.classList.add('current');
    }
  };

  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{resumeData.name}</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}