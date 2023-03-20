<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  strength: number
  maxStrength: number
}>()

const strengthPercentage = computed<number>(() => {
  return (100 / props.maxStrength) * props.strength
})

const inputProgressBgColor = computed(() => ({
  'input-progress--small': strengthPercentage.value < 30,
  'input-progress--medium': strengthPercentage.value > 30 && strengthPercentage.value < 80,
  'input-progress--big': strengthPercentage.value > 80
}))

const inputProgressStyle = computed<string>(() => {
  return `width: ${strengthPercentage.value}%`
})
</script>

<template>
    <div :class="[inputProgressBgColor, 'input-progress']" :style="inputProgressStyle" />
</template>

<style scoped>
.input-progress {
  height: 0.5rem;
}

.input-progress--small {
  background-color: var(--color-danger);
}

.input-progress--medium {
  background-color: var(--color-warning);
}

.input-progress--big {
  background-color: var(--color-primary);
}
</style>
