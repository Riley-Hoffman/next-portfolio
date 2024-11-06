import packageJson from "../package.json";

export const getBaseUrl = (path: string = "") =>
  `https://rileyhoffman.com${path}`;
export const getName = () => `${packageJson.author}`;
export const getPageTitle = (page: string = "") =>
  `${page + getName()} - Web Developer`;
export const getImageUrl = (imagePath: string = "thumbnail.jpg") =>
  `https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/${imagePath}`;
export const getGithub = () => packageJson.repository.url;
export const getLinkedIn = () => "https://www.linkedin.com/in/rileyhoffman";
