import axios from "axios";
import { queryClient } from '@/app/providers/react-query/client'
import { attachAuthInterceptors } from './interceptors/attachAuth'
import { API_BASE_URL } from './config'

export const AxiosClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});


// Подключаем интерцепторы
attachAuthInterceptors(AxiosClient, queryClient)
