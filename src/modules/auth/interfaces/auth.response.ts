import type { User } from './user.response'

export interface AuthResponse {
  refresh: string
  access: string
  user: User
}
