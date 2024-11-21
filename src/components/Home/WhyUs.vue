<script>
export default {
  name: 'WhyChooseSection',
  data() {
    return {
      reasons: [
        {
          title: 'Access to Student Talent',
          description: 'Employers can tap into a pool of highly skilled and motivated student freelancers eager to work and learn.',
          image: '/img/students.webp',
          accentColor: 'from-emerald-500 to-green-600',
          backgroundGradient: 'from-emerald-50 to-emerald-100'
        },
        {
          title: 'Real-World Experience',
          description: 'Students gain practical, hands-on experience by working on real projects with employers who value their developing skills.',
          image: '/img/student_working.jpg',
          accentColor: 'from-indigo-500 to-purple-600',
          backgroundGradient: 'from-indigo-50 to-indigo-100'
        },
        {
          title: 'Affordable & Flexible',
          description: 'Discover cost-effective solutions for projects with flexible work arrangements that benefit both employers and students.',
          image: 'https://www.teledataict.com/media/2021/11/Tech20Changes20Business.jpeg',
          accentColor: 'from-amber-500 to-orange-600',
          backgroundGradient: 'from-amber-50 to-amber-100'
        }
      ]
    };
  }
}
</script>

<template>
  <section class="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
    <div class="container-xl mx-auto px-4 relative z-10">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Why Choose <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">Shelfie?</span>
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Bridging the gap between ambitious student talent and innovative employers with a platform designed for mutual growth.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(reason, index) in reasons" 
          :key="index"
          class="relative group perspective-1000"
        >
          <div 
            class="relative transform transition-all duration-500 
            bg-white rounded-2xl shadow-xl overflow-hidden 
            hover:-translate-y-4 hover:rotate-1 
            border border-transparent hover:border-gradient-to-r 
            hover:border-opacity-50"
            :class="[
              reason.backgroundGradient,
              `hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)]`
            ]"
          >
            <div class="relative overflow-hidden">
              <img 
                :src="reason.image" 
                :alt="reason.title"
                class="w-full h-56 object-cover transition-transform duration-500 
                group-hover:scale-110 brightness-90 group-hover:brightness-100"
              />
              <div 
                class="absolute inset-0 opacity-0 group-hover:opacity-30 
                bg-gradient-to-r transition-opacity duration-500"
                :class="reason.accentColor"
              ></div>
            </div>

            <div class="p-6">
              <div class="flex items-center mb-4">
                <div 
                  class="w-2 h-2 rounded-full mr-3 animate-pulse"
                  :class="reason.accentColor.replace('from-', 'bg-')"
                ></div>
                <h2 class="text-xl font-bold text-gray-800 flex-grow">
                  {{ reason.title }}
                </h2>
              </div>
              
              <p class="text-gray-600 leading-relaxed min-h-[4.5rem]">
                {{ reason.description }}
              </p>
              
              <div class="mt-4 flex justify-between items-center">
                <div 
                  class="h-1 w-16 rounded-full transition-all duration-500 
                  group-hover:w-24 opacity-30 group-hover:opacity-100"
                  :class="reason.accentColor.replace('from-', 'bg-')"
                ></div>
                <span 
                  class="text-sm font-medium text-transparent bg-clip-text 
                  bg-gradient-to-r from-teal-500 to-blue-500 
                  hover:text-blue-600 cursor-pointer"
                >
                  Learn More →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.border-gradient-to-r {
  border-image: linear-gradient(to right, #14b8a6, #3b82f6);
  border-image-slice: 1;
}
</style>