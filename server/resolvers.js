import { Job, Company } from "./db.js"

export const resolvers = {
  Query: {
    company: async (root, { id }) => Company.findById(id),
    job: async (root, { id }) => Job.findById(id),
    jobs: async () => Job.findAll(),
  },

  //company to jobs assosiation
  Company: {
    jobs: async (company) => Job.findAll((job) => job.companyId === company.id),
  },

  Job: {
    company: async (job) => Company.findById(job.companyId),
  },
}
