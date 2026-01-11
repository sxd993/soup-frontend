// import { getNews } from "@/entities/News/model/api/news.api"
// import { NewsDetailClient } from "./NewsDetailClient"

// type PageProps = {
//   params: Promise<{ id: string }>
// }

// // Генерирует статические параметры для всех новостей {требуется для output: export}
// export async function generateStaticParams() {
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

// export default async function NewsDetailPage({ params }: PageProps) {
//   const { id } = await params
  
//   return <NewsDetailClient id={id} />
// }

export default function NewsDetailPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Страница временно недоступна</p>
    </div>
  )
}