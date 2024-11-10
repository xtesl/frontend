<template>
  <section class="py-8 sm:py-16 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6">
      <!-- Heading -->
      <div class="text-center mb-6 sm:mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-700">Popular Categories</h2>
      </div>

      <!-- Grid of Categories -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8">
        <!-- Category Cards -->
        <div v-for="(category, index) in categories" :key="index" class="bg-white p-4 sm:p-6 rounded-lg shadow text-center">
          <i :class="category.icon" class="text-3xl sm:text-4xl text-gray-600 mb-2 sm:mb-4"></i>
          <h3 class="text-sm sm:text-lg font-semibold text-gray-800">{{ category.name }}</h3>
        </div>
      </div>

      <!-- View More Button -->
      <div class="text-center mt-6 sm:mt-8">
        <RouterLink
          to="/categories"
          class="inline-block bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
        >
          View More Categories
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  { icon: 'pi pi-desktop', name: 'Design' },
  { icon: 'pi pi-code', name: 'Development' },
  { icon: 'pi pi-chart-bar', name: 'Marketing' },
  { icon: 'pi pi-pencil', name: 'Writing' },
  { icon: 'pi pi-chart-line', name: 'Data Science' },
  { icon: 'pi pi-wallet', name: 'Finance' },
  { icon: 'pi pi-briefcase', name: 'Business' },
  { icon: 'pi pi-play', name: 'Music' },
  { icon: 'pi pi-camera', name: 'Photography' },
  { icon: 'pi pi-video', name: 'Video Editing' },
  { icon: 'pi pi-users', name: 'Virtual Assistant' },
  { icon: 'pi pi-comment', name: 'Translation' },
];
</script>

<style scoped>
/* Hover effect on category cards */
.bg-white:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
</style>
