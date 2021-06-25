import { useState, useEffect } from 'react'

export const identityScriptLoader = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [scriptError, setScriptError] = useState('')

  const onScriptLoaded = () => {
    setScriptLoaded(true)
  }

  const onScriptError = (error: string) => {
    setScriptError(error)
  }

  useEffect(() => {
    var tag = document.createElement('script')
    tag.src = 'https://js.myidentitypay.com/v1/inline/kyc.js'
    tag.async = true
    tag.addEventListener('load', onScriptLoaded)
    tag.addEventListener('complete', onScriptLoaded)
    //@ts-ignore
    tag.addEventListener('error', onScriptError)
    var body = document.getElementsByTagName('body')[0]
    body.appendChild(tag)
  }, [])

  return [scriptLoaded, scriptError]
}
