<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import WhyUs from '@/components/Home/WhyUs.vue';
import FAQs from '@/components/Home/FAQs.vue';
import WhatYouNeedToKnow from '@/components/Home/WhatYouNeedToKnow.vue';
import PrimaryButton from '@/components/navigators/buttons/PrimaryButton.vue';
import HeroCategories from '@/components/Home/HeroCategories.vue';


const faqs = [ { question: "What is Shelfie?", 
answer: "Shelfie is a platform that connects talented students with employers seeking fresh skills and innovative solutions." }, 
{ question: "How can I become a freelancer on Shelfie?", 
answer: "Students can create a freelancer account by signing up and completing their profile. Once approved, you can start applying for available projects." }, 
{ question: "Can I post jobs as an employer?", 
answer: "Yes, both businesses and individuals, including students, can post jobs on Shelfie. You can list your job and find talented freelancers to work with." }, 
{ question: "Is there a fee to use Shelfie?", 
answer: "Shelfie charges a small commission on completed projects, both from freelancers and employers. For more details, please check our Terms of Service." },
 { question: "How do I get paid as a freelancer?", 
 answer: "Freelancers are paid through the platform once the employer releases the funds. The process is safe and secure through our escrow system." } ];
</script>

<template>
<Hero />
<HeroCategories />
<HomeCards />
<WhyUs />
<FAQs :faqs="faqs"/>
<WhatYouNeedToKnow />
<div class="flex flex-col space-y-4 items-center justify-center p-4"> 
    <PrimaryButton variant="outline" size="lg">
    Join Now
</PrimaryButton>
</div>

</template>
