# vt-cell

基于 vue 2.x 封装的 cell 组件，提供了基本的样式。

该组件内部默认全局注册 Cells 组件。

## Install

```javascript
npm i vt-cell -S

import Cell from 'vt-cell'

// global install
Vue.component('Cell', Cell)

// scope install
export default {
    components: {
        Cell
    }
}
```

## Usage

```example
<template>
    <Cells>
        <!-- 普通组件 -->
        <Cell>
            <p slot="content">这里是内容</p>
        </Cell>
        <!-- 带备注的组件 -->
        <Cell>
            <p slot="content">这里是内容</p>
            <p slot="label">这里是备注</p>
        </Cell>
        <!-- 带图标的组件 -->
        <Cell>
            <p slot="icon">这里是图标</p>
            <p slot="content">这里是内容</p>
        </Cell>
        <!-- 通过 link 属性，使组件具有 Accessibility 效果 -->
        <Cell link>
            <p slot="icon">这里是图标</p>
            <p slot="content">
                <a href="https://google.com">Google</a>
            </p>
            <p slot="label">这里是备注</p>
        </Cell>
        <!-- 通过 arrow 属性，使用组件默认带箭头 -->
        <Cell arrow>
            <p slot="content">这里是内容</p>
        </Cell>
    </Cells>
</template>

<script>
    import Cell from 'vt-cell'

    export default {
        components: {
            Cell
        }
    }
</script>
```