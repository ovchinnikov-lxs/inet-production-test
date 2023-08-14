<script setup lang="ts">
import { useFeatures } from '~/stores/features';
import { MODEL_NAMES } from '~/assets/ts/constants/features';

const features = useFeatures();

const actualList = computed(() => {
    if (!features.list[MODEL_NAMES.FIGARO]?.length) {
        return [];
    }

    return features.list[MODEL_NAMES.FIGARO].filter(i => i.description && i.image);
});

function addItem() {
    features.addItem({
        description: 'Вращение стационарно заставляет иначе взглянуть на то, что такое нестационарный гироскопический стабилизатор.',
        image: '/inet-production-test/features/img4.png',
        image_alt: 'нестационарный гироскопический стабилизатор',
        model_name: MODEL_NAMES.FIGARO,
        sorting: 1,
    });
}
</script>

<template>
    <section class="BlockFeatures">
        <div :class="$style.wrapper">
            <main class="container" :class="$style.container">
                <h2 :class="$style.title">
                    {{ features.block_heading }}
                </h2>

                <div :class="$style.content">
                    <ul v-if="actualList.length" :class="$style.list">
                        <li v-for="(item, index) in actualList" :key="index">
                            <IndexBlockFeaturesItem
                                :description="item.description"
                                :image="item.image"
                                :image-alt="item.image_alt"
                            />
                        </li>
                    </ul>

                    <UiButton
                        color="secondary"
                        :class="$style.button"
                        @click="addItem"
                    >
                        Добавить особенность
                    </UiButton>
                </div>
            </main>
        </div>
    </section>
</template>

<style lang="scss" module>
.wrapper {
    width: 100%;
    height: 100%;
    padding: calc(var(--ui-unit) * 16) 0;
}

.container {
    display: flex;
    flex-direction: column;
    row-gap: calc(var(--ui-unit) * 12);
}

.title {
    text-transform: uppercase;
    font-size: calc(var(--ui-unit) * 9);
    font-weight: 300;
    line-height: 134%;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: var(--ui-col);
}

.list {
    @include reset-list;

    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: calc(var(--ui-unit) * 6);
    grid-row-gap: calc(var(--ui-unit) * 6);

    @include respond-to(tablet) {
        grid-template-columns: repeat(1, 1fr);
    }
}

.button {
    width: calc(var(--ui-col) * 7);
}
</style>
