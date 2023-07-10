import { useState, useEffect } from 'react'

export const identityScriptLoader = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [scriptError, setScriptError] = useState('')

  const onScriptLoaded = () => {
    setScriptLoaded(true)
  }

  const onScriptError = (error) => {
    setScriptError(error)
  }

  useEffect(() => {
    var tag = document.createElement('script')
    tag.src = 'https://js.prembly.com/v1/inline/widget.js'
    tag.async = true
    tag.addEventListener('load', onScriptLoaded)
    tag.addEventListener('complete', onScriptLoaded)
    tag.addEventListener('error', onScriptError)
    var body = document.getElementsByTagName('body')[0]
    body.appendChild(tag)
  }, [])

  return [scriptLoaded, scriptError]
}
