/* eslint-disable prettier/prettier */
import { useEffect } from 'react'
import { identityScriptLoader } from './components/loadScript'

declare global {
  interface Window { IdentityKYC: any; }
}

window.IdentityKYC = window.IdentityKYC || {};

interface Props {
  first_name: string,
  last_name: string,
  email: string,
  merchant_key: string,
  user_ref: string,
  is_test: boolean,
  callback: () => void
}

const useIdentityPayKYC = (props:Props) => {
  const [scriptLoaded, scriptError] = identityScriptLoader()

  const options = {
    first_name: props.first_name,
    last_name: props.last_name,
    email: props.email,
    merchant_key: props.merchant_key,
    user_ref: props.user_ref,
    is_test: props.is_test,
    callback: props.callback
  }

  const verifyWithIdentity = () => {
    if (scriptLoaded) {
      window.IdentityKYC.verify(options)
    }
  }

  useEffect(() => {
    if (scriptError) {
      throw new Error('Could not load identitypay KYC script')
    }
  }, [scriptError])

  return verifyWithIdentity
}

export default useIdentityPayKYC
