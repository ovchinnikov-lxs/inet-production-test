import { defineNuxtPlugin } from '#app';
import { useFeatures } from '~/stores/features';

export default defineNuxtPlugin(async (nuxtApp: any) => {
    const features = useFeatures(nuxtApp.$pinia);

    await Promise.all([
        features.fetchInitial(),
    ]);
});
