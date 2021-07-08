# react-identity-kyc

> MyIdentityPay ReactJS KYC verification library

[![NPM](https://img.shields.io/npm/v/react-identity-kyc.svg)](https://www.npmjs.com/package/react-identity-kyc) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-identity-kyc
```

## Usage

```jsx
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

```

## License

MIT © [kayode001](https://github.com/kayode001)
"# react-identity-kyc"
