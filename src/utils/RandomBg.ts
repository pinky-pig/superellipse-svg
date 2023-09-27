// -----------------------------------------------------------------------------------------//
// ---  https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_custom_elements --//
// ---  https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks     --//
// ---  https://mdn.github.io/web-components-examples/life-cycle-callbacks/               --//
// -----------------------------------------------------------------------------------------//

// 定义DOM
const template = document.createElement('template')
template.innerHTML = `
  <style>
    #whatIsMyRandomBG {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      filter: blur(180px);
      pointer-events: none;
    }
  </style>
  <div id="whatIsMyRandomBG">
  </div>
`

// 色域值
const themes = [
  '64a6bd-90a8c3-ada7c9-d7b9d5-f4cae0'.split('-').map(a => `#${a}`),
  '4059ad-6b9ac4-97d8c4-eff2f1-f4b942'.split('-').map(a => `#${a}`),
  'd1f0b1-b6cb9e-92b4a7-8c8a93-81667a'.split('-').map(a => `#${a}`),
  '7776bc-cdc7e5-fffbdb-ffec51-ff674d'.split('-').map(a => `#${a}`),
  '628395-96897b-dbad6a-cf995f-d0ce7c'.split('-').map(a => `#${a}`),
  '28536b-c2948a-7ea8be-f6f0ed-bbb193'.split('-').map(a => `#${a}`),
  'dcc48e-eaefd3-b3c0a4-505168-27233a'.split('-').map(a => `#${a}`),
  'dab6c4-7b886f-b4dc7f-feffa5-ffa0ac'.split('-').map(a => `#${a}`),
]
// 随机方法
function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min // 含最大值，含最小值
}
// function random(min:number, max:number) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`

// 生成多边形
function randomGeneratePolygon(themes: any) {
  // 渲染几个多边形（这里只有3个）
  const polygonList = Array(getRandomIntInclusive(3, 3)).fill([])

  // 随机这几个多边形的颜色数组
  const polygonColorArray = getRandomIntInclusive(0, themes.length - 1)

  // 遍历每个多边形
  return polygonList.map((_item, index) => {
    // 1.首先获取每个多边形随机的边数
    const num = Array(getRandomIntInclusive(3, 10)).fill([])

    // 2.然后计算每个角的坐标
    const coordinates = num.map(() => {
      // 获取x坐标（这里三个图形各三分之一，所以使用三等分）
      const x = getRandomIntInclusive(100 / 3 * index, 100 / 3 * (index + 1))
      // 获取y坐标
      const y = getRandomIntInclusive(0, 100)

      return [`${x}%`, `${y}%`]
    })

    // 3.根据得到的坐标，生成clip-path字符串,n条边即是n个角,n个坐标,坐标范围要在画布最大最小的范围内
    let clipPathStr = ''
    coordinates.forEach((i) => {
      const str = `${i[0]} ${i[1]},`
      clipPathStr += str
    })

    return {
      path: `polygon(${clipPathStr.slice(0, clipPathStr.length - 1)})`,
      color: themes[polygonColorArray][index],
    }
  })
}

export function generateRandomBg() {
  class RandomBg extends HTMLElement {
    shadow: ShadowRoot
    constructor() {
      super()
      this.shadow = this.attachShadow({
        mode: 'open',
      })
      this.render()
    }

    static get observedAttributes() {
      return ['rerender', 'initial']
    }

    get rerender() {
      return this.getAttribute('rerender')
    }

    set rerender(value) {
      this.setAttribute('rerender', `${value}`)
    }

    get initial() {
      // return this.hasAttribute('dblable') // boolean
      return this.getAttribute('initial')
    }

    set initial(value) {
      // if (value)
      //   this.setAttribute('dblable', '')
      // else
      //   this.removeAttribute('dblable')
      this.setAttribute('initial', JSON.stringify(value))
    }

    get palettes() {
      const propsPalettes = this.getAttribute('palettes')
      // 如果有
      if (propsPalettes) {
        try {
          return JSON.parse(propsPalettes)
        }
        catch (error) {
          // eslint-disable-next-line no-console
          console.log('当前传入的色板值有问题', error)
        }
      }
      else {
        return themes
      }
    }

    set palettes(value) {
      this.setAttribute('palettes', JSON.stringify(value))
    }

    render(defaultData?: any) {
      // 先清除，再添加
      while (this.shadow.lastElementChild)
        this.shadow.removeChild(this.shadow.lastElementChild)

      // 克隆一份 template 防止重复使用 污染
      const content = template.content.cloneNode(true) as HTMLElement
      // 获取背景盒子
      const container = content.querySelector('#whatIsMyRandomBG') as HTMLElement
      // 生成随机多边形 item
      const randomBgItems = defaultData || randomGeneratePolygon(this.palettes)
      // 遍历将其添加到 shadow-dom
      for (let i = 0; i < randomBgItems.length; i++) {
        const item = document.createElement('div')
        item.setAttribute('style', `width: 100%; height: 100%; position: absolute; clip-path: ${randomBgItems[i].path}; background: ${randomBgItems[i].color}`) // 可行
        container.appendChild(item)
      }
      // 添加
      this.shadow.appendChild(content)
      this.dispatchEvent(new CustomEvent('rendered', { detail: randomBgItems }))
    }

    // ---------- 生命周期函数 ----------//
    // 1.当 custom element 首次被插入文档 DOM 时，被调用。
    connectedCallback() {
      // console.log('custom element 首次被插入文档 DOM')
    }

    // 2.当 custom element 从文档 DOM 中删除时，被调用。
    disconnectedCallback() {
      // console.log('custom element 从文档 DOM 中删除')
    }

    // 3.当 custom element 被移动到新的文档时，被调用。
    adoptedCallback() {
      // console.log('custom element 被移动到新的文档')
    }

    // 4.当 custom element 增加、删除、修改自身属性时，被调用。
    // 如果需要触发，需要先在 observedAttributes 中定义
    attributeChangedCallback(name: string, _oldValue: any, _newValue: any) {
      // 重新渲染

      // 第一次进来不重新渲染
      if (name === 'rerender' && _oldValue !== null)
        this.render()

      // 默认渲染
      if (name === 'initial' && _newValue !== '') {
        // 1. 默认渲染
        let defaultData = null
        try {
          defaultData = JSON.parse(_newValue)
          this.render(defaultData)
        }
        catch (error) {
          console.error('当前传入的初始数据有问题')
        }
      }
      else if (name === 'initial' && _newValue === '') {
        // 2.随机渲染
        this.render()
      }
    }
  }

  // 防止重复注册
  window.customElements.get('random-bg') || window.customElements.define('random-bg', RandomBg)
}

generateRandomBg()
