"use client"

import React, { useEffect, useState } from "react"

import { jobs } from "../../../jobs"

interface IJob {
  job_id: string
  title: string
  location: string
  employment_type: string
  description: string
  requirements: string
  posted_date: string
  expiry_date: string
  contact_name: string
  contact_email: string
  contact_phone: string
  tags: string
  is_active: string
  applicants: string[]
  created_at: string
  updated_at: string
}

type ActiveTab = "All" | "Product" | "Engineering" | "Sales"

const tabs: ActiveTab[] = ["All", "Engineering", "Product", "Sales"]

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("All") // Initial active tab
  const [job, setJob] = useState<IJob[]>([])

  useEffect(() => {
    jobs && setJob(jobs)
  }, [])

  // Function to handle tab click
  const handleTabClick = (tab: ActiveTab) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4">
        {tabs.map((tab: ActiveTab, i: number) => (
          <TabButton
            activeTab={activeTab === tab}
            tab={tab}
            handleTabClick={handleTabClick}
            key={i}
          />
        ))}
        {/* Add similar buttons for other tabs */}
      </div>

      <div className="mt-4">
        {activeTab === "All" && (
          <div className="text-gray-700">
            <div className="grid grid-cols-2 gap-4 mb-16">
              {job.map((job, i) => (
                <JobCard job={job} key={i} />
              ))}
            </div>
          </div>
        )}
        {activeTab === "Product" && (
          <div className="text-gray-700">
            <div className="grid grid-cols-2 gap-4 mb-16">
              {job.map(
                (job: IJob, i: number) =>
                  job.tags === "Product" && <JobCard job={job} key={i} />
              )}
            </div>
          </div>
        )}
        {activeTab === "Engineering" && (
          <div className="text-gray-700">
            <div className="grid grid-cols-2 gap-4 mb-16">
              {job.map(
                (job: IJob, i: number) =>
                  job.tags === "Engineering" && <JobCard job={job} key={i} />
              )}
            </div>
          </div>
        )}
        {activeTab === "Sales" && (
          <div className="text-gray-700">
            <div className="grid grid-cols-2 gap-4 mb-16">
              {job.map(
                (job: IJob, i: number) =>
                  job.tags === "Sales" && <JobCard job={job} key={i} />
              )}
            </div>
          </div>
        )}

        {/* Add similar content sections for other tabs */}
      </div>
    </div>
  )
}

const TabButton = ({
  activeTab,
  tab,
  handleTabClick,
}: {
  activeTab: boolean
  tab: ActiveTab
  handleTabClick: Function
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${
        activeTab ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
      } hover:bg-blue-600 hover:text-white transition duration-300`}
      onClick={() => handleTabClick(tab)}
    >
      {tab}
    </button>
  )
}

// Modifi this card for styling job cards
const JobCard = ({ job }: any) => {
  return (
    <a href="/card1-url">
      <div className="border flex flex-row  border-gray-400 border-1 rounded-lg p-4 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300">
        <div className="bg-grey-300">
          <h2 className="text-xl font-semibold mb-2">{job?.title}</h2>
          <p>{job?.employment_type}</p>
        </div>
        <p className="pl-5 pt-5">{job?.tags}</p>
      </div>
    </a>
  )
}
