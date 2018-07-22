<template src="./template.html"/>
<style lang="scss" src="./style.scss"></style>
<script>
import { mapActions } from 'vuex'
import config from 'conf'
import particlesJS from 'plugins/particles'

const { constant } = config

export default {
    data() {
        return {
            errorMsg: '',
            userType: '0'
        }
    },
    mounted(){
        particlesJS('particles-js', constant.particles)
    },
    methods: {
        ...mapActions(['login'])
    }
}
</script>
