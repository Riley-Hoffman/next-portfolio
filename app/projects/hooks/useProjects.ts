import { useState, useEffect } from "react"
import { fetchFirebaseData } from "../../../lib/fetchFirebaseData"
import { Project } from "../components/ProjectContent"

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProjects = (
          await fetchFirebaseData<Project[]>("/projects")
        ).flat() as Project[]
        setProjects(fetchedProjects)
      } catch (error) {
        console.error("Error fetching projects:", error)
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { projects, loading }
}
