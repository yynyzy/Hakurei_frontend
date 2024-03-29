export interface AuthRequest{
  username: string
  password: string
  phone?: string
}

export interface LoginResponse {
  token: string
  refresh_token: string
}

export interface UserInfo {
  id: string,
  username: string
  password?: string
  email?: string
  phone?: number
  avatar?: string
  role: number
  status: number
}
