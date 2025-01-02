import packageJson from "@/package.json"

export const getBaseUrl = (path: string = "") =>
  `https://rileyhoffman.com${path}/`
export const author = packageJson.author
export const getPageTitle = (page: string = "") =>
  `${page ? page + " - " + author : author} - Web Developer`
export const baseDescription =
  "Web developer building accessible, responsive, and user-focused web applications. Driven by curiosity, I'm a problem solver, who writes clean, modular code."
export const getImageUrl = (imagePath: string = "thumbnail.jpg") =>
  `https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/${imagePath}`
export const githubUrl = packageJson.repository.url.replace(".git", "")
export const linkedInUrl = "https://www.linkedin.com/in/rileyhoffman"
export const version = packageJson.version
