import { toast as sonnerToast } from "sonner"

export const toast = sonnerToast

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return children
}

export type ToastProps = {
  title?: string
  description?: string
  action?: React.ReactNode
}

export type ToastActionElement = React.ReactElement
