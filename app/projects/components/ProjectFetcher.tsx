"use client"
import { useState, useEffect } from "react"
import { fetchFirebaseData } from "../../../lib/fetchFirebaseData"
import { Project } from "./ProjectContent"
import ProjectsList from "./ProjectsList"

export const ProjectFetcher = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await fetchFirebaseData<Project[]>("/projects")
      setProjects(fetchedProjects?.flat() ?? [])
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="h-full min-h-[60vh] py-20 text-center">
        <p>Loading...</p>
      </div>
    )
  }

  return <ProjectsList initialProjects={projects} />
}
