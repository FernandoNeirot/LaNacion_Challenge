import React from 'react'

const useApiResult = (request: any): any => {
  const { url, options } = request
  const [results, setResults] = React.useState(null)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    fetch(url, options)
      .then(async (response) => {
        if (response.ok) {
          setResults(await response.json())
          setError(null)
        } else {
          setError(await response.text())
        }
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [request])

  return [results, error]
}

export default useApiResult
