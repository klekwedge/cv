import { useEffect } from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Greetings from "../Greetings/Greetings";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Strengths from "../Strengths/Strengths";

function App() {

  function offset(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  function animOnScroll(animItems:  NodeListOf<HTMLElement>) {
    console.log(animItems);
    for (let i = 0; i < animItems.length; i += 1) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        window.scrollY > animItemOffset - animItemPoint &&
        window.scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      }
    }
  }


  useEffect(() => {
    const animItems: NodeListOf<HTMLElement> = document.querySelectorAll("._anim-item");
    window.addEventListener("scroll", () => animOnScroll(animItems));

    return () => {
      window.removeEventListener("scroll", () => animOnScroll(animItems));
    };
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Greetings />
        <div className="main__container _container">
          <About />
          <Skills />
          <Strengths />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
