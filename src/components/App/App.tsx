import { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../NavBar/NavBar';
import NewAbout from '../NewAbout/NewAbout';
import Portfolio from '../Portfolio/Portfolio';

function App() {
  function changeHeaderOnScroll() {
    const menuBody = document.querySelector('.header') as HTMLElement;
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      menuBody.style.boxShadow = '0 0 5px 2px #2d2d2d';
    } else {
      menuBody.style.boxShadow = '';
    }
  }

  const activeAnchorLink = () => {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      if (window.pageYOffset >= section.offsetTop) {
        links.forEach((link) => {
          link.classList.remove('_active-link');

          if (link.getAttribute('href')?.replace('#', '') === section.getAttribute('id')) {
            link.classList.add('_active-link');
          }
        });
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => activeAnchorLink());
    window.addEventListener('scroll', () => changeHeaderOnScroll());

    return () => {
      window.removeEventListener('scroll', () => activeAnchorLink());
      window.addEventListener('scroll', () => changeHeaderOnScroll());
    };
  }, []);

  return (
    <main>
      {/* <Header /> */}
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <NewAbout />
        <Portfolio />
      </div>
    </main>
  );
}

export default App;
