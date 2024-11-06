import packageJson from "../package.json";

export const getBaseUrl = (path: string = "") =>
  `https://rileyhoffman.com${path}`;
export const getName = () => `${packageJson.author}`;
export const getPageTitle = (page: string = "") =>
  `${page + getName()} - Web Developer`;
export const getBaseDescription = () =>
  "I am a web developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers.";
export const getImageUrl = (imagePath: string = "thumbnail.jpg") =>
  `https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/${imagePath}`;
export const getGithub = () => packageJson.repository.url;
export const getLinkedIn = () => "https://www.linkedin.com/in/rileyhoffman";
