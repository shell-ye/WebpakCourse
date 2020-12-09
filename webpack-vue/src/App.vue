<template>
    <main id="app">
        {{ msg }}
        <Assets />
        {{ $store.state.name }}
        <router-link tag="a" to="/">主页</router-link>
        <router-link tag="a" to="/next">副页</router-link>
        <router-view />
    </main>
</template>

<script>
import Assets from '@/components/Assets/index'
export default {
    data () {
        return {
            msg: 'Hello World'
        }
    },
    components: {
        Assets
    }
}
</script>

<style> 

</style>