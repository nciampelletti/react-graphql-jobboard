import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { getJob } from "../graphql/queries"
import { useEffect, useState } from "react"

function JobDetail() {
  const [job, setJob] = useState(null)
  const { jobId } = useParams()

  console.log(jobId)

  useEffect(() => {
    getJob(jobId).then(setJob)
  }, [jobId])

  console.log(job)
  // const job = jobs.find((job) => job.id === jobId)
  if (!job) {
    return <p>loading ...</p>
  }
  return (
    <div>
      <h1 className='title'>{job.title}</h1>
      <h2 className='subtitle'>
        <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
      </h2>
      <div className='box'>{job.description}</div>
    </div>
  )
}

export default JobDetail

