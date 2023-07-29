import React from 'react'
import { Navigate } from 'react-router-dom'
function Protected({ status, children }) {
  if (!status) {
    //alert("Must be signed in to access this page");
    return <Navigate to="/Login" replace />
  }
  return children
}
export default Protected