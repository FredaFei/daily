import useSWR from 'swr';
import { defaultHttp } from '../lib/http'

export const useCostType = (type: number | string) => {
  const { data: costType, mutate, error } = useSWR(`/dailyCost/costTypes`, async (key) => {
    const response = await defaultHttp.get<PagedResources<CostType>>(key, {
      params: { type },
      autoHandlerError: true
    })
    return response.data.data
  })
  return { costType, mutate, error }
}