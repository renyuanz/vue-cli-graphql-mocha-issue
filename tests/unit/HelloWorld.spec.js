import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import { graphql } from 'graphql'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const t = graphql();
    console.log(t);
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
