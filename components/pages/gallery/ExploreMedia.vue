<template>
  <BaseContainer>
    <div class="mb-10 md:mb-16 lg:mb-22.5 mt-12 md:mt-20 lg:mt-27.5">
      <h2
        class="text-center mb-[15px] text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
      >
        {{ $t("mediaGallery.exploreOur") }}
        <span class="italic font-semibold text-[#CE1D1F]">
          {{ $t("mediaGallery.media") }}
        </span>
      </h2>

      <p
        class="font-normal text-[#0E0E0E] text-center sm:px-8 lg:px-[179px] mb-4 md:mb-5.5 xl:mb-12.5"
      >
        {{ $t("mediaGallery.paragrapgh") }}
      </p>

      <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(image, index) in imagesToShow"
          :key="image.id"
          class="w-full h-auto aspect-square overflow-hidden rounded-2xl group cursor-pointer relative"
          @click="openLightbox(index)"
          ref="imageContainer"
        >
          <!-- Loading skeleton with shimmer effect -->
          <div
            v-if="!image.loaded && !image.error"
            class="w-full h-full bg-gray-200 rounded-2xl relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </div>

          <div
            v-else-if="image.error"
            class="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center"
          >
            <div class="text-center text-gray-500">
              <svg class="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <p class="text-xs">Failed to load</p>
            </div>
          </div>

          <img
            v-else
            :src="image.src"
            :alt="image.alt"
            width="400"
            height="400"
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 rounded-2xl"
            @load="onImageLoad(index)"
            @error="onImageError(index)"
            :style="{ 
              opacity: image.loaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }"
          />
        </div>
      </div>

      <div class="flex justify-center items-center mt-8">
        <button
          name="load more"
          v-if="imagesToShow.length < allImages.length"
          @click="loadMore"
          :disabled="isLoading"
          class="flex items-center justify-center gap-2.5 py-3.5 px-4.5 text-xs font-semibold border border-[#CE1D1F] text-white bg-[#CE1D1F] rounded-full cursor-pointer w-fit transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <span v-if="isLoading" class="animate-spin">⟳</span>
          <span v-else>{{ $t("blogs.loadMore") }}</span>
          <IconButtonArrow v-if="!isLoading" />
        </button>
      </div>
    </div>

    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="lightboxImages"
      :index="indexRef"
      @hide="closeLightbox"
    />

    <div><GetInTouch /></div>
  </BaseContainer>
</template>

<script setup lang="ts">
import VueEasyLightbox from "vue-easy-lightbox";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  loaded?: boolean;
  error?: boolean;
  priority?: boolean;
};

const allImages: GalleryImage[] = [
  { id: 1, src: "/images/gallery/1.webp", alt: "Desert adventure gallery image 1" },
  { id: 2, src: "/images/gallery/2.webp", alt: "Desert adventure gallery image 2" },
  { id: 3, src: "/images/gallery/3.webp", alt: "Desert adventure gallery image 3" },
  { id: 4, src: "/images/gallery/4.webp", alt: "Desert adventure gallery image 4" },
  { id: 5, src: "/images/gallery/5.webp", alt: "Desert adventure gallery image 5" },
  { id: 6, src: "/images/gallery/6.webp", alt: "Desert adventure gallery image 6" },
  { id: 8, src: "/images/gallery/8.webp", alt: "Desert adventure gallery image 8" },
  { id: 9, src: "/images/gallery/9.webp", alt: "Desert adventure gallery image 9" },
  { id: 10, src: "/images/gallery/10.webp", alt: "Desert adventure gallery image 10" },
  { id: 11, src: "/images/gallery/11.webp", alt: "Desert adventure gallery image 11" },
  { id: 12, src: "/images/gallery/12.webp", alt: "Desert adventure gallery image 12" },
  { id: 13, src: "/images/gallery/13.webp", alt: "Desert adventure gallery image 13" },
  { id: 14, src: "/images/gallery/14.webp", alt: "Desert adventure gallery image 14" },
  { id: 15, src: "/images/gallery/15.webp", alt: "Desert adventure gallery image 15" },
  { id: 16, src: "/images/gallery/16.webp", alt: "Desert adventure gallery image 16" },
  { id: 17, src: "/images/gallery/17.webp", alt: "Desert adventure gallery image 17" },
  { id: 18, src: "/images/gallery/18.webp", alt: "Desert adventure gallery image 18" },
  { id: 19, src: "/images/gallery/19.webp", alt: "Desert adventure gallery image 19" },
  { id: 20, src: "/images/gallery/20.webp", alt: "Desert adventure gallery image 20" },
  { id: 21, src: "/images/gallery/21.webp", alt: "Desert adventure gallery image 21" },
  { id: 22, src: "/images/gallery/22.webp", alt: "Desert adventure gallery image 22" },
  { id: 23, src: "/images/gallery/23.webp", alt: "Desert adventure gallery image 23" },
  { id: 24, src: "/images/gallery/24.webp", alt: "Desert adventure gallery image 24" },
  { id: 25, src: "/images/gallery/25.webp", alt: "Desert adventure gallery image 25" },
  { id: 26, src: "/images/gallery/26.webp", alt: "Desert adventure gallery image 26" },
  { id: 27, src: "/images/gallery/27.webp", alt: "Desert adventure gallery image 27" },
  { id: 28, src: "/images/gallery/28.webp", alt: "Desert adventure gallery image 28" },
  { id: 29, src: "/images/gallery/29.webp", alt: "Desert adventure gallery image 29" },
  { id: 30, src: "/images/gallery/30.webp", alt: "Desert adventure gallery image 30" },
  { id: 31, src: "/images/gallery/31.webp", alt: "Desert adventure gallery image 31" },
].map(img => ({
  ...img,
  priority: img.id <= 9
}));

const loadCount = ref(9);
const imagesToShow = ref<GalleryImage[]>([]);
const visibleRef = ref(false);
const indexRef = ref(0);
const isLoading = ref(false);
const imageContainer = ref<HTMLElement[]>([]);

let intersectionObserver: IntersectionObserver | null = null;

const lightboxImages = computed(() => 
  imagesToShow.value
    .filter(img => img.loaded && !img.error)
    .map(img => img.src)
);

const preloadCriticalImages = (images: GalleryImage[]) => {
  const criticalImages = images.slice(0, 3);
  criticalImages.forEach(img => {
    if (img.priority) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img.src;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    }
  });
};

const setupIntersectionObserver = () => {
  if (typeof window === 'undefined') return;
  
  intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          loadImage(index);
          intersectionObserver?.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.1
    }
  );
};

// Load individual image
const loadImage = (index: number) => {
  if (imagesToShow.value[index] && !imagesToShow.value[index].loaded) {
    imagesToShow.value[index].loaded = true;
  }
};

onMounted(() => {
  const initialImages = allImages.slice(0, loadCount.value).map((img, index) => ({
    ...img,
    loaded: img.priority || false,
    error: false,
  }));
  
  imagesToShow.value = initialImages;
  
  preloadCriticalImages(initialImages);
  
  setupIntersectionObserver();
  
  nextTick(() => {
    imageContainer.value.forEach((el, index) => {
      if (el && !imagesToShow.value[index]?.loaded) {
        el.setAttribute('data-index', index.toString());
        intersectionObserver?.observe(el);
      }
    });
  });
});

const loadMore = async () => {
  if (isLoading.value) return;
  
  isLoading.value = true;
  
  await new Promise(resolve => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      requestIdleCallback(resolve);
    } else {
      setTimeout(resolve, 0);
    }
  });
  
  const newLoadCount = Math.min(loadCount.value + 9, allImages.length);
  const newImages = allImages.slice(0, newLoadCount).map((img, index) => ({
    ...img,
    loaded: index < loadCount.value ? imagesToShow.value[index]?.loaded || false : false,
    error: index < loadCount.value ? imagesToShow.value[index]?.error || false : false,
  }));
  
  loadCount.value = newLoadCount;
  imagesToShow.value = newImages;
  isLoading.value = false;
  
  nextTick(() => {
    imageContainer.value.forEach((el, index) => {
      if (el && !imagesToShow.value[index]?.loaded && intersectionObserver) {
        el.setAttribute('data-index', index.toString());
        intersectionObserver.observe(el);
      }
    });
  });
};

const openLightbox = (index: number) => {
  indexRef.value = index;
  visibleRef.value = true;
};

const closeLightbox = () => {
  visibleRef.value = false;
};

const onImageLoad = (index: number) => {
  if (imagesToShow.value[index]) {
    imagesToShow.value[index].loaded = true;
    imagesToShow.value[index].error = false;
  }
};

const onImageError = (index: number) => {
  if (imagesToShow.value[index]) {
    imagesToShow.value[index].error = true;
    imagesToShow.value[index].loaded = false;
  }
};

const optimizePerformance = () => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    requestIdleCallback(() => {
      const loadedImages = imagesToShow.value.filter(img => img.loaded);
      if (loadedImages.length > 50) {
        // Keep only recent 15 images in memory
        imagesToShow.value = imagesToShow.value.slice(-15);
      }
    });
  }
};

onUnmounted(() => {
  if (intersectionObserver) {
    intersectionObserver.disconnect();
  }
});

// Run performance optimization periodically
onMounted(() => {
  setInterval(optimizePerformance, 60000);
});
</script>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
</style>
