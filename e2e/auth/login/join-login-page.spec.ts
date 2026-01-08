import { expect, test } from '@playwright/test'

test.describe('auth login page', () => {
  test('Открытие страницы входа из главной', async ({ page }) => {

    await page.goto('http://localhost:3000/')
    await page.goto('http://localhost:3000/auth/login')

    await expect(page).toHaveURL('http://localhost:3000/auth/login')
    await expect(page.getByPlaceholder('E-mail')).toBeVisible()
    await expect(page.getByPlaceholder('Пароль')).toBeVisible()
  })
})
