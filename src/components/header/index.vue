<template>
  <div
    class="header clearfix"
  >
    <div
      class="pull-left"
      id="logo"/>
    <div class="pull-left navigation">
      <ul class="list-unstyled list-inline">
        <li>
          <router-link
            :to="url.login">登录</router-link>
        </li>
        <li>
          <router-link
            :to="url.app.todos">todos示例</router-link>
        </li>
        <li>
          <router-link
            :to="url.app.others">其它</router-link>
        </li>
      </ul>
    </div>
    <div class="pull-right headrright">
      <div>{{ username }}</div>
      <div @click="logout"><i class="fa fa-power-off" /></div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import config from 'conf'

const { url } = config
const { mapState } = createNamespacedHelpers('login')

export default {
    name: 'Header',
    data(){
        return {
            url,
            currentPath: this.$route.name
        }
    },
    mounted(){
        console.log(this.username, this.$route, this.url)
    },
    computed: {
        ...mapState({
            username: state => state.username
        })
    },
    methods: {
        logout(){

        }
    }
}
</script>

<style scoped lang="scss">
    .header {
        font-size: 16px;
        @include size(100%, 60px);
        background-color: $header-bg-color;
        overflow: hidden;

        #logo {
            @include size(150px, 60px);
            background: url("./images/nav-logo.png") 20px 13px no-repeat;
            overflow: hidden;
        }
        .navigation {
            height: 60px;
            overflow: hidden;

            li {
                @include size(120px, 60px);
                padding: 0;
                line-height: 60px;
                overflow: hidden;

                a {
                    @include size(100%, 100%);
                    text-decoration: none;
                    padding-left: 35px;
                    color: $header-font-color;
                    display: block;
                    position: relative;
                    outline: none;

                    &:hover, &.router-link-active {
                        color: $header-active-color;
                    }
                }
            }
        }
        .headrright {
            height: 60px;
            color: $header-font-color;
            margin-right: 20px;
            overflow: hidden;
            & > div {
                float: left;
            }
            & > div:nth-child(1) {
                padding-right: 5px;
                @include text-overflow();
                text-align: center;
                line-height: 60px;
            }
            & > div:nth-child(2) {
                @include size(40px, 60px);
                line-height: 60px;
                text-align: center;
                cursor: pointer;
                .fa-power-off {
                    cursor: pointer;
                    &:hover {
                        color: $white;
                    }
                }
            }
        }
    }
</style>
