const projects = [
  {
    title: "Игровой магазин",
    image: "assets/img/portfolio/game-shop.png",
    description: "Игровой магазин",
    tools: [
      "React",
      "Redux",
      "React Router",
      "Tailwind CSS",
      "Chakra UI",
      "React icons",
    ],
    github: "https://github.com/klekwedge/game-shop",
    link: "https://klekwedge-game-shop.vercel.app",
    filter: ['react']
  },
  {
    title: "Портал Рик и Морти",
    image: "assets/img/portfolio/rick-and-morty.png",
    description: "Портал Рик и Морти",
    tools: ["Next", "Chakra UI", "React icons"],
    github: "https://github.com/klekwedge/rick-and-morty",
    link: "https://klekwedge-rick-and-morty.vercel.app",
    filter: ['react']
  },
  {
    title: "Приложение Todo",
    image: "assets/img/portfolio/todo.png",
    description: "Приложение Todo",
    tools: ["React", "React Router", "Chakra UI", "React icons"],
    github: "https://github.com/klekwedge/todo",
    link: "https://klekwedge-todo.vercel.app",
    filter: ['react']
  },
  {
    title: "Помодоро",
    image: "assets/img/portfolio/pomodoro.png",
    description: "Помодоро",
    tools: ["React", "TypeScript", "Redux", "Chakra UI", "SCSS"],
    github: "https://github.com/klekwedge/pomodoro",
    link: "https://klekwedge-pomodoro.vercel.app/",
    filter: ['react']
  },
  {
    title: "Прогноз погоды",
    image: "assets/img/portfolio/weather-forecast.png",
    description: "Прогноз погоды",
    tools: ["React", "TypeScript", "Redux", "Chakra UI", "SCSS"],
    github: "https://github.com/klekwedge/weather-forecast",
    link: "https://klekwedge-weather-forecast.vercel.app/",
    filter: ['react']
  },
  {
    title: "Countries",
    image: "assets/img/portfolio/countries.png",
    description: "Countries",
    tools: ["React", "TypeScript", "Redux", "Chakra UI", "SCSS"],
    github: "https://github.com/klekwedge/countries",
    link: "https://klekwedge-countries.vercel.app",
    filter: ['react']
  },
  {
    title: "Игровая библиотека",
    image: "assets/img/portfolio/games-library.png",
    description: "Игровая библиотека",
    tools: ["React", "React Router", "Chakra UI", "React icons"],
    github: "https://github.com/klekwedge/games-library",
    link: "https://klekwedge-games-library.vercel.app/",
    filter: ['test']
  },
  {
    title: "Камень, ножница, бумага",
    image: "assets/img/portfolio/rock-paper-scissors.png",
    description: "Камень, ножница, бумага",
    tools: ["React", "TypeScript", "Redux", "Chakra UI"],
    github: "https://github.com/klekwedge/rock-paper-scissors",
    link: "https://klekwedge-rock-paper-scissors.vercel.app/",
    filter: ['react']
  },
  {
    title: "Генератор цвета",
    image: "assets/img/portfolio/color-generator.png",
    description: "Генератор цвета",
    tools: ["React", "TypeScript", "Chakra UI"],
    github: "https://github.com/klekwedge/color-generator",
    link: "https://klekwedge-color-generator.vercel.app/",
    filter: ['react']
  },
  {
    title: "Hacker news",
    image: "assets/img/portfolio/hacker-news.png",
    description: "Hacker news",
    tools: ["React", "TypeScript", "Chakra UI"],
    github: "https://github.com/klekwedge/hacker-news",
    link: "https://klekwedge-hacker-news.vercel.app/",
    filter: ['test']
  },
  // {
  //   title: "Books (тестовое задание)",
  //   image: "assets/img/portfolio/books.png",
  //   description: "Books (тестовое задание)",
  //   tools: ["React", "TypeScript", "Chakra UI"],
  //   github: "https://github.com/klekwedge/books",
  //   link: "https://books-klekwedge.vercel.app/",
  // },
  {
    title: "Сапер",
    image: "assets/img/portfolio/minesweeper.png",
    description: "Сапер",
    tools: ["React", "TypeScript", "Chakra UI"],
    github: "https://github.com/klekwedge/minesweeper",
    link: "https://klekwedge-minesweeper.vercel.app",
    filter: ['test']
  },
  {
    title: "Kanban доска",
    image: "assets/img/portfolio/kanban-board.png",
    description: "Kanban доска",
    tools: ["React", "TypeScript", "Chakra UI"],
    github: "https://github.com/klekwedge/kanban-board",
    link: "https://klekwedge-kanban-board.vercel.app",
    filter: ['test']
  },
  {
    title: "Message form",
    image: "assets/img/portfolio/message-form.png",
    description: "Message form",
    tools: ["React", "TypeScript", "Chakra UI"],
    github: "https://github.com/klekwedge/message-form",
    link: "https://klekwedge-message-form.vercel.app/",
    filter: ['test']
  },
  {
    title: "Курс валют",
    image: "assets/img/portfolio/rostelecom-test-task.png",
    description: "Курс валют",
    tools: ["React", "TypeScript", "Chakra UI"],
    github: "https://github.com/klekwedge/rostelecom-test-task",
    link: "https://klekwedge-rostelecom-test-task.vercel.app/",
    filter: ['test']
  },
  {
    title: "Github search",
    image: "assets/img/portfolio/github-search.png",
    description: "Github search",
    tools: ["React", "TypeScript", "Chakra UI"],
    github: "https://github.com/klekwedge/github-search",
    link: "https://klekwedge-github-search.vercel.app/",
    filter: ['react']
  },
  {
    title: "Галерея изображений",
    image: "assets/img/portfolio/image-gallery.png",
    description: "Галерея изображений",
    tools: ["React", "React Router", "Chakra UI", "React icons"],
    github: "https://github.com/klekwedge/image-gallery",
    link: "https://klekwedge-image-gallery.vercel.app/",
    filter: ['test']
  },
  {
    title: "Кастомная таблица",
    image: "assets/img/portfolio/custom-table.png",
    description: "Кастомная таблица",
    tools: ["React", "React Router", "Chakra UI", "React icons"],
    github: "https://github.com/klekwedge/custom-table",
    link: "https://klekwedge-custom-table.vercel.app/",
    filter: ['test']
  },
  {
    title: "Antd таблица",
    image: "assets/img/portfolio/antd-table.png",
    description: "Antd таблица",
    tools: ["React", "React Router", "Chakra UI", "React icons"],
    github: "https://github.com/klekwedge/antd-table",
    link: "https://klekwedge-antd-table.vercel.app/",
    filter: ['test']
  },
  {
    title: "Todo",
    image: "assets/img/portfolio/todo-infotecs.png",
    description: "Todo",
    tools: ["React", "TypeScript", "Chakra UI"],
    github: "https://github.com/klekwedge/todo-infotecs",
    link: "https://klekwedge-todo-infotecs.vercel.app/",
    filter: ['test']
  },
  {
    title: "Угадай слово",
    image: "assets/img/portfolio/guess-the-word.png",
    description: "Угадай слово",
    tools: ["React", "TypeScript", "Chakra UI"],
    github: "https://github.com/klekwedge/guess-the-word",
    link: "https://klekwedge-guess-the-word.vercel.app/",
    filter: ['react']
  },
  {
    title: "Викторина",
    image: "assets/img/portfolio/quiz.png",
    description: "Викторина",
    tools: ["React", "TypeScript", "Redux", "Chakra UI", "SCSS"],
    github: "https://github.com/klekwedge/quiz",
    link: "https://klekwedge-quiz.vercel.app/",
    filter: ['react']
  },
  {
    title: "Cat Pinterest",
    image: "assets/img/portfolio/cat-pinterest.png",
    description: "Cat Pinterest",
    tools: ["React", "TypeScript", "Redux", "Chakra UI", "SCSS"],
    github: "https://github.com/klekwedge/cat-pinterest",
    link: "https://klekwedge-cat-pinterest.vercel.app/",
    filter: ['react']
  },
  {
    title: "Сайт-портфолио фотографа",
    image: "assets/img/portfolio/photographer-portfolio.png",
    description: "Сайт-портфолио фотографа",
    tools: ["HTML", "SCSS", "JavaScript"],
    github:
      "https://github.com/klekwedge/rs-projects/tree/photographer-portfolio",
    link: "#",
    filter: ['js']
  },
  {
    title: "Simetra",
    image: "assets/img/portfolio/simetra.png",
    description: "Simetra",
    tools: ["HTML", "SCSS", "JavaScript"],
    github: "https://github.com/denisstrizhkin/simetra",
    link: "https://opd.strdenis.com",
    filter: ['js']
  },
  {
    title: "Фильмы",
    image: "assets/img/portfolio/movie-app.png",
    description: "Фильмы",
    tools: ["HTML", "SCSS", "JavaScript"],
    github: "https://github.com/klekwedge/rs-projects/tree/js30-2.3-movie-app",
    link: "https://klekwedge.github.io/rs-projects/js30-2.3-movie-app/",
    filter: ['js']
  },
  {
    title: "Галерея фотографий",
    image: "assets/img/portfolio/image-galery.png",
    description: "Галерея фотографий",
    tools: ["HTML", "SCSS", "JavaScript"],
    github:
      "https://github.com/klekwedge/rs-projects/tree/js30-2.2-image-galery",
    link: "https://klekwedge.github.io/rs-projects/js30-2.2-image-galery/",
    filter: ['js']
  },
  {
    title: "Игра на запоминание",
    image: "assets/img/portfolio/memory-game.png",
    description: "Игра на запоминание",
    tools: ["HTML", "SCSS", "JavaScript"],
    github:
      "https://github.com/klekwedge/rs-projects/tree/js30-3.2-memory-game#",
    link: "https://klekwedge.github.io/rs-projects/js30-3.2-memory-game/",
    filter: ['js']
  },
  {
    title: "Видеоплеер",
    image: "assets/img/portfolio/custom-video.png",
    description: "Видеоплеер",
    tools: ["HTML", "SCSS", "JavaScript"],
    github:
      "https://github.com/klekwedge/rs-projects/tree/js30-1.3-custom-video",
    link: "https://klekwedge.github.io/rs-projects/js30-1.3-custom-video/",
    filter: ['js']
  },
  {
    title: "Аудиоплеер",
    image: "assets/img/portfolio/audio-player.png",
    description: "Аудиоплеер",
    tools: ["HTML", "SCSS", "JavaScript"],
    github:
      "https://github.com/klekwedge/rs-projects/tree/js30-1.2-audio-player",
    link: "https://klekwedge.github.io/rs-projects/js30-1.2-audio-player/",
    filter: ['js']
  },
  {
    title: "Математика для детей",
    image: "assets/img/portfolio/math-for-kids.png",
    description: "Математика для детей",
    tools: ["HTML", "SCSS", "JavaScript"],
    github: "https://github.com/klekwedge/math-for-kids",
    link: "https://klekwedge.github.io/math-for-kids/",
    filter: ['js']
  },
  {
    title: "Математический калькулятор",
    image: "assets/img/portfolio/math-calculator.png",
    description: "Математический калькулятор",
    tools: ["HTML", "SCSS", "JavaScript"],
    github: "https://github.com/klekwedge/math-calculator",
    link: "https://klekwedge.github.io/math-calculator/",
    filter: ['js']
  },
  {
    title: "CSS слайдер",
    image: "assets/img/portfolio/css-slider.png",
    description: "CSS слайдер",
    tools: ["HTML", "CSS"],
    github: "https://github.com/klekwedge/cssMemSlider",
    link: "https://klekwedge.github.io/cssMemSlider/cssMemSlider/",
    filter: ['js']
  },
  {
    title: "Лендинг «Cuda»",
    image: "assets/img/portfolio/cuda.png",
    description: "Лендинг «Cuda»",
    tools: ["HTML", "SCSS", "JavaScript"],
    github: "https://github.com/klekwedge/cuda",
    link: "https://klekwedge.github.io/cuda/",
    filter: ['js']
  },
  {
    title: "Лендинг «Decor color expert»",
    image: "assets/img/portfolio/decor-color-expert.png",
    description: "Лендинг «Decor color expert»",
    tools: ["HTML", "SCSS", "JavaScript"],
    github: "https://github.com/klekwedge/decor-color-expert",
    link: "https://klekwedge.github.io/decor-color-expert/",
    filter: ['js']
  },
];

export default projects;
