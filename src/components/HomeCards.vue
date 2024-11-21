<template>
  <div class="relative bg-gray-50 min-h-screen md:min-h-screen sm:min-h-[600px] overflow-hidden">
    <!-- Enhanced Background Grid -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 
        bg-grid-slate-200/[0.1] 
        dark:bg-grid-slate-800/[0.15] 
        [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.7))]
        sm:[mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))]
      "></div>
    </div>
    
    <!-- Animated Connection Visualization -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 810">
        <!-- Animated Connections -->
        <g class="connection-lines">
          <path 
            v-for="(line, index) in connectionLines" 
            :key="index"
            :d="line.path"
            :stroke="line.color"
            stroke-width="2"
            fill="none"
            class="opacity-40 sm:opacity-30 animate-pulse"
            :style="{
              animationDelay: `${line.delay}ms`,
              animationDuration: `${line.duration}ms`
            }"
          />
        </g>
        
        <!-- Animated Nodes -->
        <g class="nodes">
          <circle 
            v-for="(node, index) in nodes" 
            :key="index"
            :cx="node.x" 
            :cy="node.y" 
            :r="node.radius"
            :fill="node.color"
            class="transform transition-all duration-500 hover:scale-125"
          />
        </g>
      </svg>
    </div>
    
    <!-- Header Container -->
    <div class="relative z-10 container mx-auto px-4 py-12 sm:py-20 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
          Elevate Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">Potential</span>
        </h1>
        <p class="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-10 leading-relaxed">
          Connect, Collaborate, and Create — Where Student Talent Meets Innovative Opportunities
        </p>
        
        <!-- Call to Action Buttons -->
        <div class="flex justify-center space-x-4 sm:space-x-6">
          <button 
            class="px-5 py-2 sm:px-8 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg shadow-lg hover:from-teal-600 hover:to-blue-600 transition-all transform hover:scale-105 animate-bounce-slow"
          >
            Find Opportunities
          </button>
          <button 
            class="px-5 py-2 sm:px-8 sm:py-3 text-sm sm:text-base border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Post a Project
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveAnimatedLandingHeader',
  data() {
    return {
      connectionLines: this.generateConnectionLines(),
      nodes: this.generateNodes()
    }
  },
  methods: {
    generateConnectionLines() {
      const lines = [];
      const lineCount = window.innerWidth < 640 ? 10 : 15;
      for (let i = 0; i < lineCount; i++) {
        lines.push({
          path: this.generateCurvedPath(),
          color: this.getRandomConnectionColor(),
          delay: Math.random() * 2000,
          duration: 3000 + Math.random() * 2000
        });
      }
      return lines;
    },
    generateNodes() {
      const nodes = [];
      const nodeCount = window.innerWidth < 640 ? 20 : 30;
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * 1440,
          y: Math.random() * 810,
          radius: 2 + Math.random() * 5,
          color: this.getRandomNodeColor()
        });
      }
      return nodes;
    },
    generateCurvedPath() {
      const startX = Math.random() * 1440;
      const startY = Math.random() * 810;
      const endX = Math.random() * 1440;
      const endY = Math.random() * 810;
      
      const controlX1 = (startX + endX) / 2 + (Math.random() * 200 - 100);
      const controlY1 = (startY + endY) / 2 + (Math.random() * 200 - 100);
      
      return `M${startX},${startY} Q${controlX1},${controlY1} ${endX},${endY}`;
    },
    getRandomConnectionColor() {
      const colors = [
        'rgba(13, 148, 136, 0.4)',  // Teal
        'rgba(59, 130, 246, 0.4)',  // Blue
        'rgba(99, 102, 241, 0.4)'   // Indigo
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    getRandomNodeColor() {
      const colors = [
        'rgba(13, 148, 136, 0.7)',  // Teal
        'rgba(59, 130, 246, 0.7)',  // Blue
        'rgba(99, 102, 241, 0.7)'   // Indigo
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }
}
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-bounce-slow {
  animation: bounce-slow 2s infinite;
}
</style>