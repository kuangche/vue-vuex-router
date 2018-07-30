<template src="./template.html" />
<style lang="scss" src="./style.scss" scoped />

<script>
import config from 'conf'

const { url } = config

export default {
    name: 'Others',
    data(){
        return {
            url
        }
    },
}
</script>
