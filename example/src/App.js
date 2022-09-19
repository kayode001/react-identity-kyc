import React from 'react'

import useIdentityPayKYC from 'react-identity-kyc'

const App = () => {
  const config = {
    first_name:"",
    last_name:"",
    email:"",
    merchant_key:"",
    user_ref:"",
    config_id:"",
    callback:(response)=>console.log(response)
  }
  const verifyWithIdentity = useIdentityPayKYC(config)

  return <button onClick={verifyWithIdentity} >Click to Test</button>
}
export default App
