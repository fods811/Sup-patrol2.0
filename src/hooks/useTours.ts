import { useQuery } from '@tanstack/react-query'
import { toursData, type Tour } from '../data/tours'

const fetchTours = async (): Promise<Tour[]> => {
  // Имитация загрузки с сервера
  await new Promise(resolve => setTimeout(resolve, 500))
  return toursData
}

export function useTours() {
  return useQuery({
    queryKey: ['tours'],
    queryFn: fetchTours,
    staleTime: 5 * 60 * 1000,
  })
}