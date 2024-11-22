<template>
    <nav aria-label="breadcrumb" class="mb-4">
      <ol class="flex text-sm text-gray-500 space-x-2 items-center">
        <li v-for="(crumb, index) in crumbs" :key="index" class="flex items-center">
          <RouterLink
            v-if="index < crumbs.length - 1"
            :to="crumb.path"
            class="text-teal-500 hover:underline flex items-center"
          >
            <span v-if="index === 0">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9m-9-9v18" />
              </svg>
            </span>
            {{ crumb.label }}
          </RouterLink>
          <span v-else class="text-gray-800 font-semibold">
            {{ crumb.label }}
          </span>
          <svg
            v-if="index < crumbs.length - 1"
            class="w-3 h-3 text-gray-400 mx-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </li>
      </ol>
    </nav>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  
  defineProps({
    crumbs: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every((crumb) => crumb.label && crumb.path !== undefined);
      },
    },
  });
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  