import axios from "axios";
import { queryClient } from '@/app/providers/react-query/client'
import { attachAuthInterceptors } from './interceptors/attachAuth'

export const AxiosClient = axios.create({
  baseURL: 'http://localhost:3005/',
  withCredentials: true,
});


// Подключаем интерцепторы
attachAuthInterceptors(AxiosClient, queryClient)