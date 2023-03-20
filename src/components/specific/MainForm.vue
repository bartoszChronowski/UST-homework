<script setup lang="ts">
import InputHint from "@/components/generic/InputHint.vue";
import InputProgress from "@/components/generic/InputProgress.vue";
import {computed, ref} from "vue";
import {STRENGTH_OPTION, StrengthOptionLabel} from "@/domain/password/strength-options";
import { RULE } from "@/domain/password/rules";

const inputData = ref('')
const passwordStrength = ref(0)

const passwordStrengthLabel = computed<string>(() => {
  return passwordStrength.value >= 5 ? StrengthOptionLabel[STRENGTH_OPTION.Strong] : StrengthOptionLabel[STRENGTH_OPTION.Weak]
})

function handlePasswordStrengthChange(strength: number) {
  passwordStrength.value = strength;
}
</script>

<template>
  <form class="ust-form">
    <input data-test="password-field" v-model="inputData" />
    <InputProgress :strength="passwordStrength" :max-strength="Object.keys(RULE).length" />
    <span data-test="validation-summary">{{ passwordStrengthLabel }}</span>
    <InputHint @password-strength-changed="handlePasswordStrengthChange" :field-model="inputData" />
  </form>
</template>

<style scoped>
.ust-form {
  display: flex;
  flex-direction: column;
  width: var(--form-width);
}

.ust-form input {
  height: var(--input-height);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-lg);
}
</style>
