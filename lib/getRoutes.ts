import fs from "fs"
import path from "path"

export interface Route {
  path: string
  name: string
}

export const getRoutes = (
  dir = path.join(process.cwd(), "app"),
  basePath = "",
  excludedPaths: string[] = ["/thank-you"]
) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  const routes: { path: string; name: string }[] = []

  if (basePath === "" && fs.existsSync(path.join(dir, "page.tsx"))) {
    routes.push({
      path: "/",
      name: "Home",
    })
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    const name = entry.name.replace(/-/g, " ")

    if (entry.isDirectory()) {
      const hasPageFile = fs.existsSync(path.join(fullPath, "page.tsx"))
      const routePath = `${basePath}/${entry.name}`.replace(/\/+/g, "/")

      if (excludedPaths.includes(routePath)) {
        continue
      }

      if (hasPageFile) {
        routes.push({
          path: routePath === "/home" ? "/" : routePath,
          name: name.charAt(0).toUpperCase() + name.slice(1),
        })
      }

      routes.push(...getRoutes(fullPath, routePath, excludedPaths))
    }
  }

  return routes
}
