<script setup lang="ts">
defineProps({
    icon: {
        type: String,
        default: '',
    },

    title: {
        type: String,
        default: '',
    },

    text: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <div class="BlockBenefitsItem">
        <div :class="$style.wrapper">
            <UiIcon
                v-if="icon"
                size="custom"
                :name="icon"
                :class="$style.icon"
            />

            <div v-if="title || text" :class="$style.content">
                <h3 v-if="title" :class="$style.title">
                    {{ title }}
                </h3>

                <p v-if="text" :class="$style.text">
                    {{ text }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    row-gap: calc(var(--ui-unit) * 6);
    text-align: center;
}

.icon {
    width: calc(var(--ui-unit) * 35);
    height: calc(var(--ui-unit) * 20);
    color: var(--ui-secondary-color);
}

.content {
    display: flex;
    flex-direction: column;
    row-gap: calc(var(--ui-unit) * 4);
    padding: calc(var(--ui-unit) * 4);
    text-transform: uppercase;
}

.title {
    font-size: calc(var(--ui-unit) * 5);
    font-weight: 700;
    line-height: 160%;
}

.text {
    font-size: calc(var(--ui-unit) * 4);
    font-weight: 400;
    line-height: 160%;
}
</style>
