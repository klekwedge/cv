import { useEffect } from "react";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Greetings from "../Greetings/Greetings";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

function App() {
  function offset(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  function animOnScroll(animItems: NodeListOf<HTMLElement>) {
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

  function scrollFunction() {
    const menuBody = document.querySelector(".header") as HTMLElement;
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      menuBody.style.boxShadow = "0 0 5px 2px #2d2d2d";
    } else {
      menuBody.style.boxShadow = "";
    }
  }

  const activeLink = () => {
    const links = document.querySelectorAll("nav a"); // ищем все навигационные ссылки
    const sections = document.querySelectorAll("section"); // ищем все секции
    sections.forEach((section) => {
      if (window.pageYOffset >= section.offsetTop) {
        links.forEach((link) => {
          link.classList.remove("_active-link");

          if (
            link.getAttribute("href")?.replace("#", "") ===
            section.getAttribute("id")
          ) {
            link.classList.add("_active-link");
          }
        });
      }
    });
  };

  useEffect(() => {
    const animItems: NodeListOf<HTMLElement> =
      document.querySelectorAll("._anim-item");
    window.addEventListener("scroll", () => animOnScroll(animItems));
    window.addEventListener("scroll", () => activeLink());
    window.addEventListener("scroll", () => scrollFunction());

    return () => {
      window.removeEventListener("scroll", () => animOnScroll(animItems));
      window.removeEventListener("scroll", () => activeLink());
      window.addEventListener("scroll", () => scrollFunction());
    };
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Greetings />
        <div className="main__container _container">
          <About />
          <Experience />
          <Skills />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
