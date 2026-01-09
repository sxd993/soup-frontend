import { expect, test } from '@playwright/test'

test.describe('Страница авторизации', () => {

  // Перед всеми тестами пишем хук, который отвечает за открытие нужной страницы заранее
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/auth/login')
  })

  test('Проверка что все нужны инпуты и кнопки на месте', async ({ page }) => {

    const emailInput = page.getByPlaceholder('E-mail')
    const passwordInput = page.getByPlaceholder('Пароль')
    const forgotPassword = page.getByText('Забыли пароль?')
    const enterButton = page.getByRole('button', { name: 'Войти' })
    const redirectToRegisterButton = page.getByRole('link', { name: 'Зарегистрируйтесь' })

    await expect(page).toHaveURL('http://localhost:3000/auth/login')

    await expect(emailInput).toBeVisible()
    await expect(passwordInput).toBeVisible()
    await expect(forgotPassword).toBeVisible()
    await expect(enterButton).toBeVisible()
    await expect(redirectToRegisterButton).toBeVisible()
  })

  test('Редирект на страницу регистрации', async ({ page }) => {
    const redirectToRegisterButton = page.getByRole('link', { name: 'Зарегистрируйтесь' })

    await redirectToRegisterButton.click()

    await expect(page).toHaveURL('http://localhost:3000/auth/register')
  })

  test('Ввод данных и авторизация', async ({ page }) => {
    const emailInput = page.getByPlaceholder('E-mail')
    const passwordInput = page.getByPlaceholder('Пароль')
    const enterButton = page.getByRole('button', { name: 'Войти' })

    await emailInput.fill('test123@mail.ru')
    await passwordInput.fill('123456789')
    await enterButton.click()

    await expect(page).toHaveURL('http://localhost:3000/profile')
  })
})
