import Vue from 'vue'
import Cell from '../src'
import { expect } from 'chai'

describe('vt-cell', () => {
    it('cell slot', () => {
        let Ctor = Vue.extend({
            render(h) {
                return h('Cell', [
                    h('div', { slot: 'icon' }, 'icon'),
                    h('div', { slot: 'content' }, 'content'),
                    h('div', { slot: 'label' }, 'label')
                ])
            },
            components: {
                Cell
            }
        })

        let vm = new Ctor().$mount()

        expect(vm.$el.querySelector('.ui-cell__icon').innerHTML).to.equal('<div>icon</div>')
        expect(vm.$el.querySelector('.ui-cell__content').innerHTML).to.equal('<div>content</div>')
        expect(vm.$el.querySelector('.ui-cell__label').innerHTML).to.equal('<div>label</div>')
    })

    it('cell props', (done) => {
        let Ctor = Vue.extend(Cell)
        let vm = new Ctor({
            propsData: {
                link: true,
                arrow: true
            }
        }).$mount()

        vm.changeBgColor('add', 0)
        
        setTimeout(() => {
            expect(vm.link).to.equal(true)
            expect(vm.arrow).to.equal(true)
            expect(vm.$el.classList.contains('ui-cell--link')).to.equal(true)
            expect(vm.$el.classList.contains('ui-cell--access')).to.equal(true)

            vm.changeBgColor('remove', 150)

            setTimeout(() => {
                expect(vm.$el.classList.contains('ui-cell--access')).to.equal(false)
                done()
            }, 160)
        }, 0)
    })

    it('cells slot', () => {
        let Ctor = Vue.extend({
            render(h) {
                return h('Cells', [h('Cell'), h('Cell')])
            },
            components: {
                Cell
            }
        })

        let vm = new Ctor().$mount()
        let cells = vm.$el.querySelectorAll('[data-hook="cell-component"]')
        
        expect(vm.$el.classList.contains('ui-cells')).to.equal(true)
        expect(cells[0].classList.contains('ui-cell--first')).to.equals(true)
        expect(cells[cells.length - 1].classList.contains('ui-cell--last')).to.equals(true)
    })
})