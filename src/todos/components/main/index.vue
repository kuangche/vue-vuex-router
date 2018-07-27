<template src="./template.html" />
<style lang="scss" src="./style.scss"></style>
<script>
import AddTodo from '../addTodo'
import VisibleTodoList from '../visibleTodoList'
import FooterView from '../footer'

export default {
    name: 'Todo',
    components: {
        AddTodo,
        VisibleTodoList,
        FooterView
    }
}
</script>
