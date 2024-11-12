<script setup>
import { ref } from 'vue';

const categories = ref([
    { id: 1, name: 'Technology and Programming', color: 'bg-blue-500', textColor: 'text-white', image: 'https://www.shutterstock.com/image-photo/programmer-people-working-laptops-smartphones-600nw-2473384115.jpg' },
    { id: 2, name: 'Creative and Design', color: 'bg-green-500', textColor: 'text-white', image: 'https://www.emotivebrand.com/wp-content/uploads/2016/10/StrategicInnovationAndDesignThinking_XSDR221-1080x675.jpg' },
    { id: 3, name: 'Business', color: 'bg-yellow-500', textColor: 'text-gray-900', image: 'https://st.depositphotos.com/1745098/3460/i/450/depositphotos_34600979-stock-photo-blue-growth-arrow.jpg' },
    { id: 4, name: 'AI Services', color: 'bg-red-500', textColor: 'text-white', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW49-_pseyaKdqBt0h4Vc3gxc_FNOMCj8hyQ&s' },
    { id: 5, name: 'Administrative', color: 'bg-purple-500', textColor: 'text-white', image: 'https://www.shutterstock.com/image-photo/organized-archive-ring-binders-woman-600nw-1029020020.jpg' },
    { 
        id: 6, 
        name: 'Academic', color: 'bg-teal-500', 
    textColor: 'text-white', 
    image: 'https://cdn.pixabay.com/photo/2019/04/18/19/44/graduation-4137887_1280.jpg' 
},
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
    <section class="max-w-screen-xl mx-auto px-6 py-8">
        <h1 class="text-4xl font-bold mb-8 text-center">Explore Our Categories</h1>

        <!-- Scrollable Container for Mobile (smaller screens) -->
        <div class="relative lg:hidden">
            <!-- Scrollable Cards Container -->
            <div class="relative">
                <div ref="containerRef" 
                     class="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hidden pb-4 px-8" 
                     style="scroll-behavior: smooth;">
                    <router-link 
                        v-for="category in categories" 
                        :key="category.id" 
                        :to="'/category/' + category.id" 
                        class="relative flex-none w-[280px] h-[200px] rounded-lg overflow-hidden group snap-start">
                        <img 
                            class="w-full h-full object-cover rounded-lg transition-transform duration-300" 
                            :src="category.image" 
                            :alt="category.name">
                        
                        <div :class="[category.color, 'absolute inset-0 bg-opacity-60 flex flex-col justify-between p-4 text-center transition-colors']">
                            <h2 :class="[category.textColor, 'text-xl font-black mb-2']">{{ category.name }}</h2>
                        </div>
                    </router-link>
                </div>

                <!-- Navigation Buttons -->
                <button 
                    @click="handlePrev" 
                    class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-md transition-colors">
                    <span class="block px-1">←</span>
                </button>
                
                <button 
                    @click="handleNext" 
                    class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-md transition-colors">
                    <span class="block px-1">→</span>
                </button>
            </div>
        </div>

        <!-- Masonry Grid for Larger Screens -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 hidden lg:grid">
            <router-link 
                v-for="category in categories" 
                :key="category.id" 
                :to="'/category/' + category.id" 
                class="relative rounded-lg overflow-hidden shadow-lg group">
                <img 
                    class="w-full h-[200px] object-cover rounded-lg transition-transform duration-300" 
                    :src="category.image" 
                    :alt="category.name">
                
                <div :class="[category.color, 'absolute inset-0 bg-opacity-60 flex flex-col justify-between p-4 text-center transition-colors']">
                    <h2 :class="[category.textColor, 'text-xl font-extrabold mb-2']">{{ category.name }}</h2>
                </div>
            </router-link>
        </div>
    </section>
</template>

<style scoped>
/* Scrollbar hiding for mobile */
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

/* Router link styles */
.router-link-exact-active,
.router-link-active {
    text-decoration: none;
}
</style>