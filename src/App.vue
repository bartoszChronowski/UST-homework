<script setup lang="ts">
import InputHint from "@/components/InputHint.vue";
import InputProgress from "@/components/InputProgress.vue";
import {computed, ref} from "vue";
import {STRENGTH_OPTION, StrengthOptionLabel} from "@/domain/password/strength-options";

const inputData = ref('')
const passwordStrength = ref(0)

const passwordStrengthLabel = computed<string>(() => {
  return passwordStrength.value > 5 ? StrengthOptionLabel[STRENGTH_OPTION.Strong] : StrengthOptionLabel[STRENGTH_OPTION.Weak]
})

function handlePasswordStrengthChange(strength: number) {
  passwordStrength.value = strength;
}
</script>

<template>
  <div class="main">
    <form class="ust-form">
      <input data-test="password-field" class="password-field" v-model="inputData" />
      <InputProgress :strength="passwordStrength" :max-strength="7" />
      <span data-test="validation-summary">{{ passwordStrengthLabel }}</span>
      <InputHint @password-strength-changed="handlePasswordStrengthChange" :field-model="inputData" />
    </form>
  </div>
</template>

<style scoped>
.main {
  background-color: var(--color-base-white);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

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
