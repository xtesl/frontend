<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow">
      <!-- Your main content goes here -->
      <slot></slot>
    </div>
    
    <footer class="bg-gradient-to-br from-gray-50 to-white border-t border-gray-100 py-12 mt-auto">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Branding Section */}
          <div class="flex flex-col items-start space-y-4">
            <div class="flex items-center space-x-3">
              <img 
                src="" 
                alt="Shelfie Logo" 
                class="h-10 w-10 rounded-lg"
              />
              <span class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
                Shelfie
              </span>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">
              Connecting ambitious student talent with innovative employers through a platform designed for mutual growth.
            </p>
          </div>

          {/* Quick Links */}
          <div class="grid grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold text-gray-800 mb-4">Company</h4>
              <nav class="space-y-2">
                <a 
                  href="#" 
                  class="text-gray-600 hover:text-teal-600 transition-colors text-sm"
                >
                  About Us
                </a>
                <a 
                  href="#" 
                  class="text-gray-600 hover:text-teal-600 transition-colors text-sm block"
                >
                  Careers
                </a>
                <a 
                  href="#" 
                  class="text-gray-600 hover:text-teal-600 transition-colors text-sm block"
                >
                  Press
                </a>
              </nav>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800 mb-4">Legal</h4>
              <nav class="space-y-2">
                <a 
                  href="#" 
                  class="text-gray-600 hover:text-teal-600 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  class="text-gray-600 hover:text-teal-600 transition-colors text-sm block"
                >
                  Terms of Service
                </a>
                <a 
                  href="#" 
                  class="text-gray-600 hover:text-teal-600 transition-colors text-sm block"
                >
                  Licensing
                </a>
              </nav>
            </div>
          </div>

          {/* Contact and Social */}
          <div class="space-y-4">
            <h4 class="font-semibold text-gray-800 mb-4">Get in Touch</h4>
            <div class="flex space-x-4">
              <a 
                href="#" 
                class="text-gray-500 hover:text-teal-500 transition-colors"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.138L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.474l8.659-9.904L0 1.153h7.594l5.243 6.932L18.901 1.153zm-2.61 17.08h2.039L7.884 3.257H5.831l10.46 14.976z"/>
                </svg>
              </a>
              <a 
                href="#" 
                class="text-gray-500 hover:text-teal-500 transition-colors"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a 
                href="#" 
                class="text-gray-500 hover:text-teal-500 transition-colors"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            <div class="mt-4">
              <a 
                href="mailto:hello@shelfie.com" 
                class="text-gray-600 hover:text-teal-600 text-sm flex items-center space-x-2"
              >
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@shelfie.com</span>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200 text-center">
          <p class="text-sm text-gray-600">
            © {{ new Date().getFullYear() }} Shelfie™ 
            <span class="mx-2">·</span> 
            All Rights Reserved 
            <span class="mx-2">·</span>
            Crafted with ❤️ by Student Innovators
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
/* Optional hover and transition effects */
a {
  @apply transition-all duration-300 ease-in-out;
}

a:hover {
  @apply transform translate-x-1 translate-y-[-2px];
}
</style>