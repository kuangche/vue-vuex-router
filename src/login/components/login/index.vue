<template src="./template.html"/>
<style lang="scss" src="./style.scss"></style>
<script>
import { mapActions } from 'vuex'
import config from 'conf'
import particlesJS from 'plugins/particles'
import * as actionTypes from '../../actions/actionTypes'

const { constant, url } = config

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            pwd: '',
            type: actionTypes.USER_TYPE[0],
            errorMsg: ''
        }
    },
    mounted(){
        this.$refs.username.focus()
        particlesJS('particles-js', constant.particles)
        document.addEventListener('keyup', this.enterEvent)
    },
    beforeDestroy(){
        document.removeEventListener('keyup', this.enterEvent)
    },
    methods: {
        ...mapActions('login', ['login']),
        enterEvent(e){
            if (e.keyCode === 13) {
                this.loginHandle()
            }
        },
        setError(errorMsg){
            this.errorMsg = errorMsg
        },
        loginHandle(){
            const { username, pwd, type } = this

            if (username.length === 0) {
                this.$refs.username.focus()
                this.setError('请输入用户名!')
                return
            }

            if (pwd.length === 0) {
                this.$refs.pwd.focus()
                this.setError('请输入密码!')
                return
            }

            // 清空错误信息
            this.setError('')

            this.login({
                data: {
                    username,
                    pwd,
                    type
                }
            })
                .then((res) => {
                    if (res.statusCode === 200) {
                        this.$router.push(url.app.root)
                    } else {
                        this.setError(res.message)
                    }
                })
        },
        checkedChange(type){
            this.type = type
        }
    }
}
</script>
