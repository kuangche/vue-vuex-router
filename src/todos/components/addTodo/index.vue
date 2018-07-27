<template src="./template.html" />
<style lang="scss" src="./style.scss" scoped></style>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions } = createNamespacedHelpers('todos')

export default {
    name: 'AddTodo',
    data(){
        return {
            text: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        addTodoFn(){
            if (this.text.length > 0) {
                this.addTodo({
                    data: {
                        id: Date.now(),
                        text: this.text,
                        completed: false
                    }
                }).then((res) => {
                    if (res.statusCode === 200) {
                        this.text = ''
                    }
                })
            } else {
                window.projectApp.$message({
                    message: '内容不能为空',
                    type: 'error'
                })
            }
        }
    }
}
</script>
