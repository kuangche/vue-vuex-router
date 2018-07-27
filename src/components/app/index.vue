<template src="./template.html"/>

<script>
import { createNamespacedHelpers } from 'vuex'
import Header from '@/components/header'

const { mapState, mapActions } = createNamespacedHelpers('login')

export default {
    name: 'App',
    data(){
        return {
            loadedUserInfo: false
        }
    },
    computed: {
        ...mapState({
            username: state => state.username
        }),
        hasAuthorize(){
            return this.username.trim().length > 0 && this.loadedUserInfo
        }
    },
    components: {
        Header
    },
    mounted(){
        this.getUserInfo()
            .then(() => {
                this.loadedUserInfo = true
            })
    },
    methods: {
        ...mapActions(['getUserInfo'])
    }
}
</script>
