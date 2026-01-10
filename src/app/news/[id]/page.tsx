import { NewsDetailClient } from "./NewsDetailClient"
// import { getNews } from "@/entities/News/model/api/news.api"

type PageProps = {
  params: Promise<{ id: string }>
}

// Временное решение: возвращаем пустой массив, так как при сборке нет доступа к бэку
// Функция реализована для соответствия требованиям output: export
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return []
}

// Старый код для генерации статических параметров из API (раскомментировать, когда бэкенд будет доступен при сборке):
// export async function generateStaticParams(): Promise<{ id: string }[]> {
//   try {
//     const news = await getNews()
//     return news.map((item) => ({
//       id: item.id,
//     }))
//   } catch (error) {
//     console.error('Error generating static params for news:', error)
//     return []
//   }
// }

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params
  
  return <NewsDetailClient id={id} />
}