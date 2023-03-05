import { useMemo } from 'react'
import useApiResult from './useApiResult'
import { services } from '../services/services'

const useServices = (): any => {
  const request = useMemo(() => services.getArticles(), [])
  return useApiResult(request)
}

export default useServices
