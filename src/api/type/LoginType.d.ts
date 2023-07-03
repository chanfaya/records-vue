export interface loginFormType {
    name: string
    password: string
  }
  
  export interface loginResult {
    code: number
    data: { token: string }
  }
  