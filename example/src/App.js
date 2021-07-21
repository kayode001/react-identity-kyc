import React from 'react'

import useIdentityPayKYC from 'react-identity-kyc'

const App = () => {
  const config = {
    first_name:"test name",
    last_name:"test name",
    email:"sjusudhsu@test.com",
    merchant_key:"",
    callback:(response)=>console.log(response)
  }
  const verifyWithIdentity = useIdentityPayKYC(config)

  return <button onClick={verifyWithIdentity} >Click to Test</button>
}
export default App
