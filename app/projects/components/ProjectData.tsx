import evangeline from '../images/evangeline-gentle-music-project.webp';
import particleCleanup from '../images/particle-cleanup-project.webp';
import outOfContext from '../images/out-of-context-project.webp';
import infinityCorkboard from '../images/infinity-corkboard-project.webp';
import weatherScout from '../images/weather-scout-project.webp';
import delicious from '../images/delicious-project.webp';

export interface Project {
    title: string;
    skills: string;
    description: string;
    internal?: boolean;
    liveUrl: string;
    gitUrl?: string;
    imgUrl: string;
    imgAlt: string;
    animation?: string;
    category: string;
}

export const projects: Project[] = [
    {
      title: 'Evangeline Gentle Music',
      skills: 'Wordpress/PHP, HTML, CSS, jQuery',
      description: 'Lost Wordpress theme rebuild. Created a new custom WP theme with the original look. Implemented page/post/archive templates, primary/mobile navigations, widget area, functions.php etc. Got client back up and running, editing their own content.',
      liveUrl: 'https://evangelinegentlemusic.com/',
      imgUrl: evangeline.src,
      imgAlt: 'Screenshot of Evangeline Gentle Music Wordpress Theme.',
      category: 'Freelance',
    },
    {
      title: 'Particle Cleanup Game',
      skills: 'React, TSX, SCSS',
      description: 'A game which generates particles from you to clean up by pushing them out of the canvas.',
      internal: true,
      liveUrl: '/projects/particle-cleanup',
      imgUrl: particleCleanup.src,
      imgAlt: 'Screenshot of Particle Cleanup Game.',
      animation: 'md:motion-safe:left-[-200%] [&[data-active="true"]]:left-0',
      category: 'Personal',
    },
    {
      title: 'Out Of Context',
      skills: 'React, JSX, AXIOS, SCSS',
      description: 'Created with React, this app allows users to search by movie name and displays GIFs based on themes (keywords) from the movie (love, war, sports etc). Three GIFs are displayed initially, with their keywords underneath. By clicking, the user can cycle through all GIFs per keyword, or look at other keywords associated with the movie, returning new GIFs!',
      liveUrl: 'https://focused-varahamihira-abf5da.netlify.app/',
      gitUrl: 'https://github.com/dearJuno/outofContext',
      imgUrl: outOfContext.src,
      imgAlt: 'Screenshot of the Out Of Context app.',
      animation: 'md:motion-safe:right-[-200%] [&[data-active="true"]]:right-0',
      category: 'Juno College',
    },
    {
      title: 'Infinity Corkboard',
      skills: 'React, JSX, REST API, CSS',
      description: "This React based app presents the user with a 4X4 grid of photos from NASA API's Astronomy Picture of the Day endpoint. The user can click any images they wish to change, which swaps it out for a new one in the same position. When the user is pleased with how the grid looks, they may save it by printing to pdf. Print output is styled so the grid appears with no other page elements in the saved file.",
      liveUrl: 'https://relaxed-visvesvaraya-8807c8.netlify.app/',
      gitUrl: 'https://github.com/Riley-Hoffman/riley-hoffman-project-three',
      imgUrl: infinityCorkboard.src,
      imgAlt: 'Screenshot of the Infinity Corkboard app.',
      animation: 'md:motion-safe:left-[-200%] [&[data-active="true"]]:left-0',
      category: 'Juno College',
    },
    {
      title: 'Weather Scout',
      skills: 'HTML, Javascript, REST API, SCSS',
      description: "With this app, users can search by city and get corresponding weather data. 'Right Now' or 'Future Forecast' can be specified. 'Right Now' returns a weather description with associated icon, and the current temperature. Future forecast returns a grid of dates with forecast temperatures. Created with Javascript, HTML and CSS.",
      liveUrl: 'https://romantic-kowalevski-f7a14c.netlify.app/',
      gitUrl: 'https://github.com/Linda-Columbus-Riley-Hoffman-Developers/weatherScout',
      imgUrl: weatherScout.src,
      imgAlt: 'Screenshot of the Weather Scout app.',
      animation: 'md:motion-safe:right-[-200%] [&[data-active="true"]]:right-0',
      category: 'Juno College',
    },
    {
      title: 'Delicious',
      skills: 'HTML, SCSS',
      description: 'A multi-page PSD conversion project for a fictional restaurant chain.',
      liveUrl: 'https://vigilant-albattani-29bee8.netlify.app/',
      gitUrl: 'https://github.com/Riley-Hoffman/riley_hoffman_project_1_delicious',
      imgUrl: delicious.src,
      imgAlt: 'Screenshot of Delicious, a PSD conversion project.',
      animation: 'md:motion-safe:left-[-200%] [&[data-active="true"]]:left-0',
      category: 'Juno College',
    },
  ];