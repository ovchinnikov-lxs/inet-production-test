<script setup lang="ts">
// UiKit Components
import { UiImage } from '@ovchinnikov-lxs-frontend/ui-kit';
import { PropType } from 'vue';

defineProps({
    description: {
        type: [String, null] as PropType<string | null>,
        default: null,
    },

    image: {
        type: [String, null] as PropType<string | null>,
        default: null,
    },

    imageAlt: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <div class="BlockFeaturesItem">
        <div :class="$style.wrapper">
            <div v-if="image" :class="$style.imageWrapper">
                <UiImage
                    :origin="image"
                    :alt="imageAlt"
                    :class="$style.image"
                />
            </div>

            <p v-if="description" :class="$style.description">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    row-gap: calc(var(--ui-unit) * 4);
}

.imageWrapper {
    @include aspect-ratio(384, 200);
}

.image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    user-select: none;
}

.description {
    font-size: calc(var(--ui-unit) * 4);
    font-weight: 300;
    line-height: 160%;
}
</style>
