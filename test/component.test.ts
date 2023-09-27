import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Background from '../src/components/ui/Background.vue'

describe('Background.vue', () => {
  it('测试随机背景', () => {
    const isRerenderFlag = 0
    const wrapper = mount(Background, { props: { isRerenderFlag } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
