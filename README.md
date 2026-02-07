## Soup Frontend

Next.js app (App Router).

Начало работы:
1) `npm i` — установка зависимостей
2) Заполните файл `.env`:

NEXT_PUBLIC_API_URL='http://localhost:3005/'

3) `npm run dev` — старт dev-сервера

## Docker (SSR, production)

Сборка и запуск:
1) Убедитесь, что в `.env` задан `NEXT_PUBLIC_API_URL`
2) `docker compose up -d --build`
3) Приложение будет доступно на `http://localhost:3000`

Остановка:
- `docker compose down`
