# react-identity-kyc

>IdentityPass ReactJS Verification library

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
    first_name:"test",
    last_name:"test",
    email:"kayode@myidentitypass.com",
    merchant_key:"",
    user_ref:"a unique ref for your user",
    is_test:false,  //set this to through for a test
    config_id:"<configuration ID retrieve from your widget settings", //optional
    callback:(response)=>console.log(response)
  }
  const verifyWithIdentity = useIdentityPayKYC(config)

  return <button onClick={verifyWithIdentity} >Click to Test</button>
}
export default App

```


```jsx
RESPONSES

1. Failed response:
         {
          code: "E01",
          message: "Message goes here",
          status: "failed"
      }
      
 2. Cancelled
      {
          code: "E02",
          message: "Verification Canceled",
          status: "failed"
      } 
 3. Success
        {
          code: "00",
          status: "success",
          message: "Verification Successful",
          data:{
              //Verification data goes here
              // kindly check official documentation for data structure for each channel
              //https://developer.myidentitypass.com
              },
          channel:"Channel goes here", e.g BVN,NIN and many more

      }
 ```      

## License

MIT © [kayode001(Olayiwola Kayode)](https://github.com/kayode001)
"# react-identity-kyc"
