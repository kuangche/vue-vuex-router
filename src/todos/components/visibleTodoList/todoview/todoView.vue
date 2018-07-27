<template src="./template.html" />
<style lang="scss" src="./style.scss" scoped />
<script>
import ClickOutside from 'vue-click-outside'

export default {
    name: 'TodoView',
    directives: {
        ClickOutside
    },
    data(){
        return {
            dataBase: this.dataItem,
            hideDelIcon: true,
            hideEditInput: true
        }
    },
    props: {
        dataItem: {
            type: Object,
            required: true
        }
    },
    watch: {
        'dataBase.completed': function () {
            this.updateTodo('completed')
        }
    },
    methods: {
        handleClickOutside(){
            if (!this.hideEditInput) {
                this.finishNameEdit()
            }
        },
        updateTodo(todoKey){
            const { id, completed, text } = this.dataBase
            this.$emit('updateTodo', {
                data: {
                    id,
                    [todoKey]: todoKey === 'completed' ? completed : text
                }
            })
        },
        removeTodo(){
            this.$emit('removeTodo', {
                params: {
                    id: this.dataBase.id
                }
            })
        },
        finishNameEdit(){
            this.updateTodo('text')
            this.hideEditInput = true
        },
        toggleHideDelIcon(hideDelIcon){
            this.hideDelIcon = hideDelIcon
        },
        toggleHideEditInput(hideEditInput){
            this.hideEditInput = hideEditInput
        }
    }
}
</script>
