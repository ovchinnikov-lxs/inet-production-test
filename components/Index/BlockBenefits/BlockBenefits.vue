<script setup lang="ts">
// UiKit
import { UiSwiper } from '@ovchinnikov-lxs-frontend/ui-kit';

const list = [
    {
        icon: 'benefits/benefit',
        title: 'выгода',
        text: 'Узнайте о выгодных сервисных предложениях Nissan именно для вашего автомобиля',
    },
    {
        icon: 'benefits/actual',
        title: 'актуальность',
        text: 'Выберите актуальные для вас сервисные предложения',
    },
    {
        icon: 'benefits/choice',
        title: 'широкий выбор',
        text: 'Выберите дилера, который вам подходит',
    },
    {
        icon: 'benefits/service',
        title: 'онлайн обслуживание',
        text: 'Отправьте дилеру данные о вашем автомобиле в форме удобной анкеты',
    },
];

const options = {
    slidesPerView: 'auto',
};
</script>

<template>
    <section class="BlockBenefits">
        <div :class="$style.wrapper">
            <main class="container" :class="$style.container">
                <h1 :class="$style.title">
                    Мы ценим Ваше время и комфорт!
                    Запишитесь на сервис Nissan онлайн
                </h1>

                <UiSwiper
                    :slides="list"
                    :options="options"
                    :class="$style.slider"
                >
                    <template #slide="props">
                        <IndexBlockBenefitsItem
                            :icon="props.slide.icon"
                            :title="props.slide.title"
                            :text="props.slide.text"
                            :class="$style.item"
                        />
                    </template>
                </UiSwiper>
            </main>
        </div>
    </section>
</template>

<style lang="scss" module>
.wrapper {
    width: 100%;
    height: 100%;

    @include respond-to(tablet) {
        overflow: hidden;
    }
}

.container {
    display: flex;
    flex-direction: column;
    row-gap: calc(var(--ui-unit) * 12);
}

.title {
    display: flex;
    flex-direction: column;
    row-gap: calc(var(--ui-unit) * 4);
    text-transform: uppercase;
    font-size: calc(var(--ui-unit) * 12);
    font-weight: 300;
    line-height: 134%;

    &:before {
        content: '';
        width: calc(var(--ui-unit) * 20);
        height: var(--ui-unit);
        background-color: var(--ui-secondary-color);
    }
}

.slider {
    width: 100%;

    @include respond-to(tablet) {
        :global(.UiSwiper__container) {
            overflow: visible;
        }
    }

    :global(.swiper-slide) {
        width: calc(var(--ui-unit) * 70.5);

        @include respond-to(tablet) {
            width: 100%;
        }

        &:not(:last-child) {
            margin-right: calc(var(--ui-unit) * 6);
        }
    }
}

.item {
    width: 100%;
}
</style>
