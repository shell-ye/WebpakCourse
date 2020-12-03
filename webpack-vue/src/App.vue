<template>
    <main>
        {{ msg }}
        <Assets />
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