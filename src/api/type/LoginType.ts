export interface loginForm {
    name: string
    password: string
  }
  
  export interface loginResult {
    code: number
    data: { token: string }
  }
  