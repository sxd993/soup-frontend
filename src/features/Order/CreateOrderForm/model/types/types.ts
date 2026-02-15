export type OrderFileItem = { url: string; name: string }

export type CreateOrderFormValues = {
  title: string
  description: string
  location: string
  categoryId: string
  budget: string
  deadline: string
  hidePhone: boolean
  fileUrls: OrderFileItem[]
}

export const defaultCreateOrderFormValues: CreateOrderFormValues = {
  title: "",
  description: "",
  location: "",
  categoryId: "",
  budget: "",
  deadline: "",
  hidePhone: false,
  fileUrls: [],
}
