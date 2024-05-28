import React from 'react'

function Dashboard() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <div>
      <p>Welcome User to Your Dashboard!</p>
      <p>Your Email is : {user?.email}</p>
    </div>
  )
}

export default Dashboard
