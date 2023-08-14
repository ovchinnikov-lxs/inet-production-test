<template>
    <div class="IndexPage">
        <div :class="$style.wrapper">
            <IndexBlockBanner/>
            <IndexBlockBenefits/>
            <IndexBlockFeatures/>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    width: 100%;
    height: 100%;
}
</style>
