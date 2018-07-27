<template src="./template.html"/>
<style lang="scss" src="./style.scss" scoped></style>

<script>
import { createNamespacedHelpers } from 'vuex'
import config from 'conf'

const { url } = config
const { mapState, mapActions } = createNamespacedHelpers('login')

export default {
    name: 'Header',
    data(){
        return {
            url
        }
    },
    computed: {
        ...mapState({
            username: state => state.username
        })
    },
    methods: {
        ...mapActions(['logout']),
        logoutFn(){
            this.logout()
                .then((res) => {
                    if (res.statusCode === 200) {
                        this.$router.push(url.login.path)
                    }
                })
        }
    }
}
</script>
