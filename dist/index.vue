<style src="./style.css"></style>
<template src="./template.html"></template>

<script>
    import Vue from 'vue'

    Vue.component('Cells', {
        render(h) {
            return h('div', {
                class: 'ui-cells'
            }, this.$slots.default)
        },
        mounted() {
            let $cells = this.$el.querySelectorAll('[data-hook="cell-component"]')

            $cells[0].classList.add('ui-cell--first')
            $cells[$cells.length - 1].classList.add('ui-cell--last')
        }
    })

    export default {
        props: {
            link: Boolean,
            arrow: Boolean
        },
        methods: {
            changeBgColor(action, time) {
                setTimeout(() => {
                    this.link && this.$el.classList[action]('ui-cell--access')
                }, time)
            }
        }
    }
</script>