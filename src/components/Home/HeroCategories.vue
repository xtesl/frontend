<script setup>
import { ref } from 'vue';

const categories = ref([
  { id: 1, name: 'Programming and Tech', color: 'bg-blue-500', textColor: 'text-white', image: 'https://www.shutterstock.com/image-photo/programmer-people-working-laptops-smartphones-600nw-2473384115.jpg' },
  { id: 2, name: 'Creative and Design', color: 'bg-green-500', textColor: 'text-white', image: 'https://www.emotivebrand.com/wp-content/uploads/2016/10/StrategicInnovationAndDesignThinking_XSDR221-1080x675.jpg' },
  { id: 3, name: 'Business', color: 'bg-yellow-500', textColor: 'text-gray-900', image: 'https://st.depositphotos.com/1745098/3460/i/450/depositphotos_34600979-stock-photo-blue-growth-arrow.jpg' },
  { id: 4, name: 'AI Services', color: 'bg-red-500', textColor: 'text-white', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW49-_pseyaKdqBt0h4Vc3gxc_FNOMCj8hyQ&s' },
  { id: 5, name: 'Administrative', color: 'bg-purple-500', textColor: 'text-white', image: 'https://www.shutterstock.com/image-photo/organized-archive-ring-binders-woman-600nw-1029020020.jpg' },
  { id: 6, name: 'Academic', color: 'bg-teal-500', textColor: 'text-white', image: 'https://cdn.pixabay.com/photo/2019/04/18/19/44/graduation-4137887_1280.jpg' },
]);

const containerRef = ref(null);

const handleNext = () => {
  if (containerRef.value) {
    const wrapperWidth = containerRef.value.offsetWidth;
    containerRef.value.scrollLeft += wrapperWidth * 0.8;
  }
};

const handlePrev = () => {
  if (containerRef.value) {
    const wrapperWidth = containerRef.value.offsetWidth;
    containerRef.value.scrollLeft -= wrapperWidth * 0.8;
  }
};
</script>

<template>
<section class="relative w-full px-4 sm:px-6 py-16 overflow-hidden">
    <!-- Dynamic Background - Now full width -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900"></div>
    
    <!-- Animated Gradient Shapes - Spread wider -->
    <div class="absolute inset-0 opacity-30">
        <div class="absolute top-0 -left-24 w-[600px] h-[600px] bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div class="absolute top-0 -right-24 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
    </div>

    <!-- Content Container with Glass Effect - Centered with max width -->
    <div class="relative max-w-screen-xl mx-auto">
        <!-- Stylized Heading -->
        <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Explore Our Categories
            </h1>
            <div class="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <!-- Scrollable Container for Mobile -->
        <div class="relative lg:hidden">
            <div class="relative">
                <div ref="containerRef"
                     class="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hidden pb-8 px-2"
                     style="scroll-behavior: smooth;">
                    <router-link
                        v-for="category in categories"
                        :key="category.id"
                        :to="'/categories/' + category.name"
                        class="relative flex-none w-[320px] h-[220px] rounded-2xl overflow-hidden group snap-start">
                        <!-- Glass Card Effect -->
                        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10"></div>
                        <img
                            class="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-110"
                            :src="category.image"
                            :alt="category.name">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:via-black/60 transition-all duration-300">
                            <div class="absolute bottom-0 left-0 right-0 p-6">
                                <h2 class="text-2xl font-bold text-white mb-2 transform translate-y-0 group-hover:-translate-y-1 transition-transform">
                                    {{ category.name }}
                                </h2>
                            </div>
                        </div>
                    </router-link>
                </div>

                <!-- Enhanced Navigation Buttons -->
                <button
                    @click="handlePrev"
                    class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110">
                    <span class="block">←</span>
                </button>
                <button
                    @click="handleNext"
                    class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110">
                    <span class="block">→</span>
                </button>
            </div>
        </div>

        <!-- Enhanced Grid for Larger Screens -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 hidden lg:grid">
            <router-link
                v-for="category in categories"
                :key="category.id"
                :to="'/categories/' + category.name"
                class="relative rounded-2xl overflow-hidden group transform hover:-translate-y-2 transition-all duration-300">
                <!-- Glass Card Effect -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10"></div>
                <img
                    class="w-full h-[250px] object-cover rounded-2xl transition-all duration-500 group-hover:scale-110"
                    :src="category.image"
                    :alt="category.name">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:via-black/60 transition-all duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                        <h2 class="text-2xl font-bold text-white mb-2 transform translate-y-0 group-hover:-translate-y-1 transition-transform">
                            {{ category.name }}
                        </h2>
                    </div>
                </div>
            </router-link>
        </div>
    </div>

</section>
</template>

<style scoped>
/* Hide scrollbar for mobile */
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

/* Hover effects */
.group:hover img {
  transform: scale(1.05);
}

.group:hover div {
  background-color: rgba(0, 0, 0, 0.3);
}

.animate-blob {
        animation: blob 7s infinite;
    }
    .animation-delay-2000 {
        animation-delay: 2s;
    }
    .animation-delay-4000 {
        animation-delay: 4s;
    }
    @keyframes blob {
        0% {
            transform: translate(0px, 0px) scale(1);
        }
        33% {
            transform: translate(30px, -50px) scale(1.1);
        }
        66% {
            transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
            transform: translate(0px, 0px) scale(1);
        }
    }
</style>
