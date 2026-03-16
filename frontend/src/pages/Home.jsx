import React, { useEffect } from 'react'




const Home = () => {
  



  return (
    <div>
      {/* <h1>home page</h1> */}
      <div className="p-6">
        {[...Array(40)].map((_, i) => (
          <p key={i} className="mb-4">
            This is some scrollable content...
          </p>
        ))}
      </div>
    </div>
  )
}

export default Home