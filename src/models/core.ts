export interface Core {
  showToaster: boolean
  message: Message
}

export interface Message {
  code: string
  body: string
  type: string
}