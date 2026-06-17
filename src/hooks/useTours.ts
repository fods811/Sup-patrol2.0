import { useQuery } from '@tanstack/react-query'
import { toursData } from '../data/tours'
import type { Tour } from '../data/tours'

export const TOURS_QUERY_KEY = ['tours'] as const

export async function fetchTours(): Promise<Tour[]> {
  return toursData
}

export function useTours() {
  return useQuery({
    queryKey: TOURS_QUERY_KEY,
    queryFn: fetchTours,
    staleTime: 5 * 60 * 1000,
  })
}
