<template>
    <button 
      :class="[
        'transition-colors duration-200 rounded-lg', 
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        { 'opacity-50 cursor-not-allowed': disabled }
      ]"
      :disabled="disabled"
      @click="$emit('click')"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, withDefaults } from 'vue'
  
  const props = defineProps({
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'outline', 'ghost'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  })
  
  defineEmits(['click'])
  
  // Base classes that apply to all buttons
  const baseClasses = 'font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  // Size variations
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-8 py-3 text-lg'
  }
  
  // Style variations
  const variantClasses = {
    primary: 'bg-gray-900 hover:bg-black text-white focus:ring-gray-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-400',
    outline: 'border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 focus:ring-gray-500',
    ghost: 'hover:bg-gray-100 text-gray-900 focus:ring-gray-400'
  }
  </script>