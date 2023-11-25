import store from "@/store"

export default function guest(to: string, next: () => void, fail: () => void): void {
  const isAuthenticated =store.getters['auth/getCurrentUser']

  if (!isAuthenticated) {
    next()
  } else {
    fail()
  }
}