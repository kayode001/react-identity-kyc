"use client";
import { useEffect } from 'react'
import { identityScriptLoader } from './components/loadScript'
import PropTypes from 'prop-types'

const useIdentityPayKYC = (props) => {
  const [scriptLoaded, scriptError] = identityScriptLoader()

  const options = {
    first_name: props.first_name,
    last_name: props.last_name,
    email: props.email,
    merchant_key: props.merchant_key,
    user_ref:props.user_ref,
    is_test:props.is_test,
    callback: props.callback,
    config_id: props.config_id,
  }

  // eslint-disable-next-line no-unused-vars
  const verifyWithIdentity = () => {
    if (scriptLoaded) {
      window.IdentityKYC.verify(options)
    }
  }

  useEffect(() => {
    if (scriptError) {
      throw new Error('Could not load identitypass KYC script')
    }
  }, [scriptError])

  return verifyWithIdentity
}

useIdentityPayKYC.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  merchant_key: PropTypes.string.isRequired,
  user_ref: PropTypes.string,
  config_id: PropTypes.string,
  is_test: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
}

export default useIdentityPayKYC
