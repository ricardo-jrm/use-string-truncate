<div align="center">

# 🌘 `@ricardojrmcom/use-string-truncate`

<b>Truncate strings with React</b>

![build](https://img.shields.io/github/workflow/status/ricardojrmcom/use-string-truncate/Continuous%20Integration?style=for-the-badge)
![license](https://img.shields.io/github/license/ricardojrmcom/use-string-truncate?style=for-the-badge)

![author](<https://img.shields.io/badge/Author-Ricardo%20%3Cl1b3r__--%3E%20Mota%20(%40ricardojrmcom)-orange?style=for-the-badge>)

![lang](https://img.shields.io/github/languages/top/ricardojrmcom/use-string-truncate?style=for-the-badge)
![version](https://img.shields.io/npm/v/@ricardojrmcom/use-string-truncate?style=for-the-badge)
![size](https://img.shields.io/bundlephobia/min/@ricardojrmcom/use-string-truncate?style=for-the-badge)

</div>

<br />

---

<br />

### <b>Install</b>

```ts
npm install @ricardojrmcom/use-string-truncate

yarn add @ricardojrmcom/use-string-truncate
```

<br />

### <b>Usage</b>

```tsx
import { useStringTruncate } from '@ricardojrmcom/use-string-truncate';

/**
 * Truncates string to fit within given length with appended ellipsis. Option to keep last word.
 */
export const TruncateString = ({
  str,
  length,
  keepLastWord,
}: TruncateStringProps) => (
  <span>
    {useStringTruncate(str, length, keepLastWord)}
  </span>
);

<TruncateString str="Lorem ipsum dolor sit amet" length={20} />
-> <span>Lorem ipsum dolor...</span>

<TruncateString str="Lorem ipsum dolor sit amet" length={20} keepLastWord />
-> <span>Lorem ipsum ... amet</span>

/**
 * Exported TruncateString props
 */
export interface TruncateStringProps {
  /**
   * String to transform
   */
  str: string;
  /**
   * Total length of the result
   */
  length: number;
  /**
   * Option to keep last word in
   */
  keepLastWord?: boolean;
}
```

<br />

---

<br />

### <b>License</b>

[MIT](https://github.com/ricardojrmcom/use-string-truncate/blob/main/LICENSE) © Ricardo <l1b3r\_-> Mota ([@ricardojrmcom](https://github.com/ricardojrmcom))

Bootstrapped with 🟣[@ricardojrmcom/supernova](https://github.com/ricardojrmcom/supernova)

<br />
