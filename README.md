## Soup Frontend

Next.js app (App Router).

### Scripts
- `npm i` — установка зависимостей
- `npm run dev` — старт dev-сервера

### Env
- `NEXT_PUBLIC_API_URL` — base URL для API
- `REVALIDATE_SECRET` — секрет для `/api/revalidate`

### ISR
- `/api/revalidate` принимает `{ secret, path }` и вызывает `revalidatePath`