<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true,
    },

    size: {
        type: String as PropType<'medium' | 'custom'>,
        default: 'medium',
        validator: (v: string): boolean => [
            'medium',
            'custom',
        ].includes(v),
    },
});

const classList = computed(() => [
    [`--${props.size}-size`],
]);

</script>

<template>
    <div class="UiIcon" :class="classList">
        <SvgIcon
            :name="name"
            class="UiIcon__el"
        />
    </div>
</template>

<style lang="scss">
.UiIcon {
    display: inline-block;
    fill: currentColor;

    &.--medium-size {
        width: calc(var(--ui-unit) * 5);
        height: calc(var(--ui-unit) * 5);
    }

    &__el {
        display: block;
        width: 100%;
        height: 100%;
    }
}
</style>
