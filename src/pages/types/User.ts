export interface LoginRequest{
  username: string
  password: string
}

export interface LoginResponse {
  token: string
  refresh_token: string
}
