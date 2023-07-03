
<template>
    <div class="login_container">
        <div class="login_box">
            <h2 class="title">登陆</h2>
            <el-form label-width="0px" class="login_form">
                <el-form-item>
                    <el-input v-model="loginForm.name" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
                </el-form-item>
                <el-row justify="end">
                    <el-form-item class="login_btn">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="()=>{}">重置</el-button>
                    </el-form-item>
                </el-row>
            </el-form>
        </div>
    </div>
  </template>
   
<script setup lang="ts">
import { loginFormType } from '@/api/type/LoginType'
import useUserStore from '@/store/modules/user'
  const loginForm = ref<loginFormType>({
    name: '',
    password: ''
  })
  const userStore = useUserStore()

  const login = () => {
    userStore.userLogin(loginForm.value)
  }
</script>
   
  <style lang="less" scoped>
  .login_container {
    background-color: #2b4b6b;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login_box {
    width: 450px;
    height: 260px;
    background-color: #fff;
    border-radius: 3px;
    .title {
        text-align: center;
        padding-bottom: 10px;
    }
    .login_form {
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .login_btn {
        display: flex;
        justify-content: flex-end;
    }
  }

  </style>