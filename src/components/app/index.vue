<template>
  <div id="chief">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '@/components/header'

export default {
    name: 'App',
    data(){
        return {
            loadedUserInfo: false
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
        ...mapActions('login', ['getUserInfo'])
    }
}
</script>

<style scoped>

</style>
