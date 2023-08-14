<script setup lang="ts">
// UiKit Components
import { UiImage } from '@ovchinnikov-lxs-frontend/ui-kit';
</script>

<template>
    <section class="BlockBanner">
        <div :class="$style.wrapper">
            <main :class="$style.main">
                <UiImage
                    origin="/banner/Mountains.png"
                    object-fit="contain"
                    :class="$style.mountains"
                />

                <UiIcon
                    name="banner/logo"
                    size="custom"
                    :class="$style.logo"
                />

                <div class="container" :class="$style.container">
                    <UiButton
                        icon="ui/arrow"
                        :class="$style.button"
                    >
                        Тест-драйв
                    </UiButton>

                    <div :class="$style.carWrapper">
                        <UiImage origin="/banner/Car.png" :class="$style.car"/>
                    </div>
                </div>
            </main>

            <div class="container" :class="$style.bottom">
                <UiIcon
                    name="banner/nissan"
                    size="custom"
                    :class="$style.nissanLogo"
                />
            </div>
        </div>
    </section>
</template>

<style lang="scss" module>
.wrapper {
    width: 100%;
    height: 100%;
}

.main {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: calc(var(--ui-unit) * 116);
    padding-bottom: calc(var(--ui-unit) * 16);
    background-color: var(--ui-accent-color);
}

.mountains {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: calc(var(--ui-unit) * 54);
    transform: translate3d(0, -50%, 0);
    user-select: none;
}

.logo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(var(--ui-col) * 26);
    height: calc(var(--ui-unit) * 48);
    transform: translate3d(-50%, -50%, 0);
}

.container {
    position: relative;
    z-index: 4;
    display: flex;
    align-items: flex-end;
    column-gap: calc(var(--ui-unit) * 44);
}

.button {
    width: calc(var(--ui-col) * 7);
}

.carWrapper {
    @include aspect-ratio(742, 385);

    width: calc(var(--ui-unit) * 186);
    transform: translate3d(0, calc(var(--ui-unit) * 35), 0);
}

.car {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    user-select: none;
}

.bottom {
    display: flex;
}

.nissanLogo {
    width: calc(var(--ui-unit) * 24);
    height: calc(var(--ui-unit) * 10);
    margin: calc(var(--ui-unit) * 5) 0 calc(var(--ui-unit) * 5) auto;
}
</style>
