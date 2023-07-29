import React from 'react'
import { Navigate } from 'react-router-dom'
function Protected({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    //alert("Must be signed in to access this page");
    return <Navigate to="/Login" replace />
  }
  return children
}
export default Protected