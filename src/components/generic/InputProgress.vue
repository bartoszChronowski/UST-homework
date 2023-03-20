<script setup lang="ts">
import {computed} from "vue";
import {STRENGTH_OPTION, StrengthSatisfaction} from "@/domain/password/strength-options";
import {PROGRESS_INDICATOR_CLASS} from "@/domain/password/rules";

const props = defineProps<{
  strength: number
  maxStrength: number
}>()

const strengthPercentage = computed<number>(() => {
  return (100 / props.maxStrength) * props.strength
})

const inputProgressBgColor = computed<string>(() =>
    props.strength < StrengthSatisfaction[STRENGTH_OPTION.Strong] ? PROGRESS_INDICATOR_CLASS.Fail : PROGRESS_INDICATOR_CLASS.Pass
)

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

.input-progress--fail {
  background-color: var(--color-danger);
}

.input-progress--pass {
  background-color: var(--color-primary);
}
</style>
