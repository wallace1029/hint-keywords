# hint-keywords

## Installation

```shell
npm i --save @qjorg/hint-keywords
```

## Usage

```js
import hintKeywords from '@qjorg/hint-keywords'
```

## Example

```ts
const options = [
  {
    label: '脑部ct',
    value: 1
  },
  {
    label: '脑部CT平扫',
    value: 2
  },
  {
    label: '胸部cT',
    value: 3
  },
] as any[]
const list = hintKeywords(options, 'ct')
// console.log(list)
const r = [
  {
    label: '脑部ct',
    value: 1,
    customLabel: '脑部<span style=\'color: red;\'>ct</span>'
  },
  {
    label: '脑部CT平扫',
    value: 2,
    customLabel: '脑部<span style=\'color: red;\'>CT</span>平扫'
  },
  {
    label: '胸部cT',
    value: 3,
    customLabel: '胸部<span style=\'color: red;\'>cT</span>'
  }
] as any[]
```

### params

```
list: any[]
keywords?: any
config: {
    targetLabel: string // default: label
    customLabel: string // customLabel: customLabel
    color: string // red
}
```
