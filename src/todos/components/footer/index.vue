<template src="./template.html" />
<style lang="scss" src="./style.scss" scoped />

<script>
import { createNamespacedHelpers } from 'vuex'
import config from 'conf'

const { mapState, mapActions, mapGetters } = createNamespacedHelpers('todos')
const { constant: {
    VisibilityFilters: {
        SHOW_ALL,
        SHOW_ACTIVE,
        SHOW_COMPLETED
    }
} } = config

export default {
    name: 'FooterView',
    computed: {
        ...mapState(['filter']),
        ...mapGetters(['listByFilter']),
        unCompletedCount(){
            return this.listByFilter.filter(item => !item.completed).length
        },
        allSelected(){
            return SHOW_ALL === this.filter
        },
        activeSelected(){
            return SHOW_ACTIVE === this.filter
        },
        completedSelected(){
            return SHOW_COMPLETED === this.filter
        }
    },
    methods: {
        ...mapActions(['setFilter', 'clearCompletedTodo'])
    }
}
</script>
