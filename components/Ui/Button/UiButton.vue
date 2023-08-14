<script setup lang="ts">
// UiKit Components
import { UiButton } from '@ovchinnikov-lxs-frontend/ui-kit';
import { PropType } from 'vue';

const props = defineProps({
    color: {
        type: String as PropType<'default' | 'secondary'>,
        default: 'default',
    },

    size: {
        type: String as PropType<'medium'>,
        default: 'medium',
    },

    icon: {
        type: [String, null] as PropType<string | null>,
        default: null,
    },
});

const classList = computed(() => [{
    '--has-icon': props.icon,
}]);

</script>

<template>
    <UiButton
        v-bind="$attrs"
        :color="color"
        :size="size"
        :class="classList"
    >
        <slot></slot>

        <UiIcon
            v-if="icon"
            :size="size"
            :name="icon"
            class="UiButton__icon"
        />
    </UiButton>
</template>

<style lang="scss">
.UiButton {
    display: flex;
    align-items: center;
    text-align: center;

    &__icon {
        margin-left: auto;
    }

    &.--has-icon {
        text-align: left;
    }

    &.--medium-size {
        column-gap: calc(var(--ui-unit) * 3);
        padding: calc(var(--ui-unit) * 2.5) calc(var(--ui-unit) * 3) calc(var(--ui-unit) * 3) calc(var(--ui-unit) * 5);
        font-size: calc(var(--ui-unit) * 4);
        font-weight: 400;
        line-height: 150%;
    }

    &.--default-color {
        background-color: var(--ui-white-color);
        color: var(--ui-black-color);

        @include hover {
            background-color: var(--ui-secondary-color);
            color: var(--ui-white-color);
        }
    }

    &.--secondary-color {
        border: 2px solid var(--ui-secondary-color);
        color: var(--ui-black-color);

        @include hover {
            background-color: var(--ui-secondary-color);
            color: var(--ui-white-color);
        }
    }
}
</style>
