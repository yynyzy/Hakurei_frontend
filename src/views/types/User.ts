export interface LoginRequest{
  username: string
  password: string
  phone?: string
}

export interface LoginResponse {
  token: string
  refresh_token: string
}

export interface UserInfo {
  username: string
  password: string
  email: string
  phone: number
  avatar: string
}
