<template>
  <div>
    dashboard
  </div>
</template>
<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";

@Component
export default class Dashboard extends Vue {
  @Prop()
  msg!: string;
}
</script>


<style scoped>

</style>