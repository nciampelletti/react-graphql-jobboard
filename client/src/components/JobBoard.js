import JobList from "./JobList"
import { getJobs } from "../graphql/queries"
import { useEffect, useState } from "react"

function JobBoard() {
  const [jobs, setJobs] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    getJobs()
      .then((jobs) => {
        setJobs(jobs)
      })
      .catch((err) => setError(true))
  }, [])

  if (error) {
    return <p>Something wen wrong</p>
  }
  return (
    <div>
      <h1 className='title'>Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  )
}

export default JobBoard

