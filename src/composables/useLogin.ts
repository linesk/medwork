import axios from 'axios'
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const loginURL:string = import.meta.env.VITE_LOGIN_API as string ?? ''

// Login functions
// 1. Login and get result of login
// 2. Register JWT token info into LocalStorage 'medwork-auth'
export const useLogin = async (user: string, password: string) => {
  // Change get to post
  try {
    const res = await axios.get(loginURL, {
      params: {
        email: user,
        password
      }
    })
    if (res?.data.result) {
      localStorage.setItem('medwork-auth', res.data.data)
      return true
    } else {
      localStorage.removeItem('medwork-auth')
      return false
    }
    console.log(res)
  } catch (err) {
    console.error(err)
  }
  return false
}

export const decodeJWT = (jwt: string) => {
  return atob(jwt.split('.')[1])
}
