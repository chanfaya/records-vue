import { loginFormType } from '@/api/type/LoginType';
import { defineStore } from 'pinia'
import { login } from '@/api/login'
const useUserStore = defineStore('User', {
    // 存储数据
    state: () => ({
        // return: {
            token: ''
        // }
    }),
    // 异步逻辑处理
    actions: {
        // 用户登录
        async userLogin(loginForm: loginFormType) {
            this.token = 'aaaa'

            console.log(loginForm)
            const res = await login(loginForm)
            this.token = 'aaaa'
            if (res.code === 200) {
                this.token = '111'
            }
        }
    },
    // 同步逻辑处理
    getters: {},


})
export default useUserStore