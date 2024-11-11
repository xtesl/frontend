<script setup>
import { defineProps } from 'vue';

defineProps({
    classes: {
        type: String,
        default: "bg-white p-6 shadow rounded-lg flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
    }
});
</script>

<template>
    <div :class="classes">
        <!-- Image Slot -->
        <div class="w-32 h-32 md:w-48 md:h-48 rounded-md overflow-hidden flex justify-center">
            <slot name="image"></slot>
        </div>

        <!-- Main Content -->
        <div class="flex-1 space-y-4 text-center md:text-left">
            <slot name="content"></slot>
        </div>

        <!-- Footer Slot with Button -->
        <div class="text-sm text-gray-700 flex-shrink-0 text-center md:text-right mt-4 md:mt-0 space-y-2">
            <slot name="footer"></slot>
            <button class="text-blue-600 hover:text-blue-800 font-semibold">
                Read More About School
            </button>
        </div>
    </div>
</template>
