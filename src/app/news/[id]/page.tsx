import { NewsDetailClient } from "./NewsDetailClient"
import type { NewsItem } from "@/entities/News/model/types/news.types"

type PageProps = {
  params: Promise<{ id: string }>
}

// Генерирует статические параметры для всех новостей {требуется для output: export}
export async function generateStaticParams() {
  try {
    // Получите список всех новостей и их ID
    const response = await fetch('http://localhost:3005/news');
    
    if (!response.ok) {
      console.error('Failed to fetch news:', response.statusText);
      return [];
    }
    
    const news: NewsItem[] = await response.json();
    
    return news.map((item: NewsItem) => ({
      id: item.id.toString(),
    }));
  } catch (error) {
    console.error('Error generating static params for news:', error)
    return []
  }
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params
  
  return <NewsDetailClient id={id} />
}