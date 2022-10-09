import { useParams } from "react-router"
import { getCompany } from "../graphql/queries"
import { useState, useEffect } from "react"
import JobList from "./JobList"

function CompanyDetail() {
  const { companyId } = useParams()
  const [company, setCompany] = useState(null)

  useEffect(() => {
    getCompany(companyId).then(setCompany)
  }, [companyId])

  if (!company) {
    return <p> Loading </p>
  }
  return (
    <div>
      <h1 className='title'>{company.name}</h1>
      <div className='box'>{company.description}</div>
      <h5> All jobs available in the company</h5>
      <JobList jobs={company.jobs} />
    </div>
  )
}

export default CompanyDetail

