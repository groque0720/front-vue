<template>
  <div>
    <Label v-if="label" :class="[{ error_text: error }]">{{ label }}</Label>
    <Input
      :type="type"
      :value="modelValue"
      :default-value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @blur="$emit('blur')"
      :placeholder="placeholder"
      :class="[{ error: error }]"
    />
    <span v-if="error" class="error_text text-xs -mt-2">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Props {
  modelValue?: string | number;
  error?: string;
  type: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  label?: string;
}

withDefaults(defineProps<Props>(), {
  type: 'text',
});

// defineEmits(['update:modelValue', 'blur']);
</script>

<style scoped>
.error {
  border-color: red;
}
.error_text {
  color: red;
}
</style>
