import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Frame from '../src/components/Frame/index'

storiesOf('外框', module)
  .add('定宽外框', () => ({
    components: {
      ChartFrame: Frame
    },
    template: `<chart-frame
      :style="{
        width: '500px',
        height: '300px'
      }"
      >chart!!!</chart-frame>`
  }))

  .add('自适应外框', () => ({
    components: {
      ChartFrame: Frame
    },
    template: `<chart-frame
      >hello<br>frame</chart-frame>`
  }))
