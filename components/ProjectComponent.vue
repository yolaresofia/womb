<template>
    <NuxtLink :to="'projects/' + project.slug.current" class="flex-1 flex-col m-4 fadeIn">
        <div class="flex h-120 bg-cover bg-center rounded-3xl relative" :style="{ backgroundImage: project.mainMedia.isVideo ? '' : 'url(' + urlFor(project.mainMedia.image.asset._ref) + ')' }">
            <video playsinline autoplay muted loop class="rounded-3xl h-full">
                <source :src="project.mainVideo" type="video/mp4" />
            </video>
            <div v-if="showCategories">
                <CategoryComponent v-for="(category, i) in project.categories" :key="category.id" :title="category.title" :i="i" />
            </div>
        </div>
        <div class="flex flex-col space-y-3">
            <h1 :class="['font-black py-4 text-xl leading-none text-left', returnThemeClass(false, 'brown')]">{{ project.title }}</h1>
            <div class="flex space-x-3">
                <div v-if="showCategories" class="flex">
                    <h4 v-for="(category, i) in project.categories" :key="category.id" :class="['font-mono text-xs uppercase', returnThemeClass(false, 'lime')]">
                        <span v-if="i > 0">,</span> {{ category.title }}
                    </h4>
                </div>
            </div>
            <SanityContent :blocks="project.information" />
        </div>
    </NuxtLink>
</template>

<script>
import general from '../mixins/general'

export default {
    mixins: [general],
    props: {
        project: {
            type: Object,
            required: true,
        },
        showCategories: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style></style>
