import { Fragment } from "react"
import Test from "./components/testing"
import Login from "./components/forms/Login"
import Dashboard from "./components/Dashboard"

export const Welcome = () => {
  return (
    <Fragment>
      {/* <Login /> */}
      <Dashboard />
    </Fragment>
  )
}
