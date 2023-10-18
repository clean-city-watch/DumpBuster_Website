import React from "react"
import Back from "../common/back/Back"
import ReportForm from "./ReportForm"
import OnlineCourses from "./Statistics"

const ReportHome = () => {
  return (
    <>
      <Back title='Report Site' />
      <ReportForm />
      <OnlineCourses />
    </>
  )
}

export default ReportHome
