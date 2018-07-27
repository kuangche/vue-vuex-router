<template src="./template.html" />
<style lang="scss" src="./style.scss" scoped></style>

<script>
import { createNamespacedHelpers } from 'vuex'
import TodoView from './todoview/todoView'

const { mapState, mapActions, mapGetters } = createNamespacedHelpers('todos')

export default {
    name: 'VisibleTodoList',
    components: {
        TodoView
    },
    mounted(){
        this.getTodos()
    },
    computed: {
        ...mapState(['list', 'filter']),
        ...mapGetters(['listByFilter']),
        checkedAll: {
            get() {
                return this.list.length === this.list.filter(item => item.completed).length
            },
            set(newCheckedValue){
                this.list.forEach((item) => {
                    const newItem = item
                    newItem.completed = newCheckedValue
                })
            }
        }
    },
    methods: {
        ...mapActions(['getTodos', 'updateTodo', 'removeTodo'])
    }
}
</script>
