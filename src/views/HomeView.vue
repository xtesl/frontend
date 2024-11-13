<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import WhyUs from '@/components/Home/WhyUs.vue';
import FAQs from '@/components/Home/FAQs.vue';
import WhatYouNeedToKnow from '@/components/Home/WhatYouNeedToKnow.vue';
import PrimaryButton from '@/components/navigators/buttons/PrimaryButton.vue';
import HeroCategories from '@/components/Home/HeroCategories.vue';
</script>

<template>
<Hero />
<HeroCategories />
<HomeCards />
<WhyUs />
<FAQs />
<WhatYouNeedToKnow />
<div class="flex flex-col space-y-4 items-center justify-center p-4"> 
    <PrimaryButton variant="outline" size="lg">
    Join Now
</PrimaryButton>
</div>

</template>
