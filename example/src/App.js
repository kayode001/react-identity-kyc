import React from 'react'

import useIdentityPayKYC from 'react-identity-kyc'

const App = () => {
  const config = {
    first_name:"Create React Library Example 😄",
    last_name:"asas",
    email:"sjusudhsu@test.com",
    merchant_key:"rvnn3ingodoed5ouy0z4:Cq_dXaVYS6F_R5HOQetA6HcLqKw",
    callback:(response)=>console.log(response)
  }
  const verifyWithIdentity = useIdentityPayKYC(config)

  return <button onClick={verifyWithIdentity} >Click to Test</button>
}
export default App
