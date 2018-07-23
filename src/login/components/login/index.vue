<template src="./template.html"/>
<style lang="scss" src="./style.scss"></style>
<script>
import { mapState, mapActions } from 'vuex'
import config from 'conf'
import particlesJS from 'plugins/particles'
import * as actionTypes from '../../actions/actionTypes'

const { constant } = config

export default {
    data() {
        return {
            errorMsg: '',
            userType: actionTypes.USER_TYPE[0]
        }
    },
    computed: mapState({

    }),
    mounted(){
        particlesJS('particles-js', constant.particles)
    },
    methods: {
        ...mapActions(['login']),
        setError(errorMsg){
            this.errorMsg = errorMsg
        },
        loginHandle(){
            this.login({
                data: {
                    username: 'aaa',
                    pwd: 'aaa',
                    type: '0'
                }
            })
                .then((res) => {
                    if (res.statusCode === 200) {
                        this.$router.push('/app')
                    } else {
                        this.setError(res.message)
                    }
                })
        }
    }
}
</script>
