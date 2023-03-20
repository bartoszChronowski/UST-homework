<script setup lang="ts">
import {computed, reactive, watchEffect} from "vue";
import {RULE, RULE_INDICATOR_CLASS, RuleLabel} from "@/domain/password/rules";

const props = defineProps<{
  fieldModel: string
}>()

const emits = defineEmits(['password-strength-changed']);

const atLeastOneLetter = computed<boolean>(() => {
  return /[a-zA-Z]+/.test(props.fieldModel)
})

const atLeastOneUpperAndOneLower = computed<boolean>(() => {
  return /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(props.fieldModel)
})

const atLeastOneNumber = computed<boolean>(() => {
  return /\d+/.test(props.fieldModel)
})

const atLeastOneSpecialSymbol = computed<boolean>(() => {
  return /[\W_]+/.test(props.fieldModel)
})

const isAtLeastCharacters = (minLength: number) => {
  return computed<boolean>(() => {
    return props.fieldModel.length > minLength;
  });
};

const passwordRuleset: Record<string, boolean> = reactive({
  [RULE.OneLetter]: atLeastOneLetter,
  [RULE.UpperAndLower]: atLeastOneUpperAndOneLower,
  [RULE.OneNumber]: atLeastOneNumber,
  [RULE.SpecialSymbol]: atLeastOneSpecialSymbol,
  [RULE.LongerThan4]: isAtLeastCharacters(4),
  [RULE.LongerThan8]: isAtLeastCharacters(8),
  [RULE.LongerThan12]: isAtLeastCharacters(12),
})

const strengthOfPassword = computed<number>(() => {
  let count = 0
  for (const key in passwordRuleset) {
    if (passwordRuleset[key])
      count++
  }
  return count;
})

watchEffect(() => {
  emits('password-strength-changed', strengthOfPassword.value);
})
</script>

<template>
    <ul class="password-hint__ruleset">
      <li
          v-for="(value, key) in passwordRuleset"
          :key="key"
          :data-test-rule-indicator="key"
          :class="[value ? RULE_INDICATOR_CLASS.Pass : RULE_INDICATOR_CLASS.Fail, 'password-hint__rule']"
      >
        {{RuleLabel[key]}}
      </li>
    </ul>
</template>

<style scoped>
.password-hint__rule--pass {
  text-decoration: line-through;
}

.password-hint__ruleset {
  margin-top: 1rem;
}

.password-hint__ruleset li {
  margin: 0.75rem 0;
}
</style>
