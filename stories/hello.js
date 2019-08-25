import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Hello from '../src/charts/Hello/index'

Vue.component('hello', Hello)
storiesOf('hello', module)
  .add('normal hello', () => '<hello>chart!!!</hello>')
