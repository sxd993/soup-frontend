export type CreateOrderFormValues = {
  title: string
  description: string
  location: string
  categoryId: string
  budget: string
  deadline: string
  hidePhone: boolean
  files: FileList | null
}

export const defaultCreateOrderFormValues: CreateOrderFormValues = {
  title: "",
  description: "",
  location: "",
  categoryId: "",
  budget: "",
  deadline: "",
  hidePhone: false,
  files: null,
}
