# Learn React

## 1. Create Component

- komponen react = function js biasa, tapi nama nya kapital
- komponen harus di export menggunakan `export default` di depan function
- bisa menggunakan komponen di dalam komponen lain, tapi inisialisasi nya harus terpisah

## 2. Import & Export Component

- default: `export default function Button()` => `import Button from './Button'`
- named: `export function Button()` => `import {Button} from './Button'`

## 3. JSX

- jsx hanya mengembalikan 1 komponen => bisa pakai `<div>`, atau `<> </>` (fragment)
- semua tag harus ditutup
- nama atribut menggunakan camelCase dan tidak boleh menggunakan nama dari sintaks js (eg `class` => `className`)
- menuliskan javascript di jsx menggunakan `{ }`
- pakai `{{ }}` untuk memasukkan objek atau cth jika ingin memasukkan style inline css
- property style pada inline css ditulis dengan camelCase (`background-color` => `backgroundColor`)

## 4. Props

- menulis props di function ({ }) sebagai argument, nama props dipisahkan dengan koma
- bisa menentukan nilai bawaan ({ size = 100 })
- menggunakan props children untuk menyisipkan konten ke dalam tag jsx,
  misal `<Card> <Avatar/> <Card/>` berarti harus buat `{children}` di dalam card

## 5. Conditional Rendering

- if else / ternary => condition `?` true `:` false
- operator AND => condition `&&` true

## 6. Rendering List

- menggunakan `filter()` dan `map()`
- setiap list harus memiliki key

## 7. Event Handler

- Event handler harus dioper, bukan dipanggil! `onClick={handleClick}`, bukan `onClick={handleClick()}`.
- atau dapat menuliskan `onClick={() => handleClick()}`
- format nama event handler => `handleEvent` , cth `onClick` => `handleClick`
- `e.stopPropagation()` menghentikan event handler tersemat pada tag di atasnya untuk terpanggil.
- `e.preventDefault()` mencegah perilaku bawaan peramban untuk beberapa event yang memilikinya.

## 8. useState()

- `import { useState } from 'react';`
- `const [number, setNumber] = useState();`
- bisa menentukan nilai awal di dalam tanda kurung `()`
- `number` dan `setNumber` selalu berpasangan
- `number` untuk menyimpan data
- `setNumber` adalah fungsi setter untuk mengatur nilai dari state

```javascript
setNumber(number + 1);
```

## 9. useImmer()

- `npm install use-immer`
- `import { useImmer } from 'use-immer;'`
- `const [number, updateNumber] = useImmer();`
- dapat mempermudah jika berhadapan dengan data yang kompleks

```javascript
updatePerson((draft) => {
  draft.name = e.target.value;
});
```

misal ada objek di dalam objek, jika menggunakan state maka harus spread berkali-kali, jika menggunakan immer maka dapat langsung mengakses objek paling dalam menggunakan `draft` (`draft` akan otomatis mengcopy data)

```javascript
const [person, updatePerson] = useImmer({
  name: "Niki de Saint Phalle",
  artwork: {
    title: "Blue Nana",
    city: "Hamburg",
    image: "https://i.imgur.com/Sd1AgUOm.jpg",
  },
});
```

###### useState

```javascript
function handleTitleChange(e) {
  setPerson({
    ...person,
    artwork: {
      ...person.artwork,
      title: e.target.value,
    },
  });
}
```

###### useImmer

```javascript
function handleTitleChange(e) {
  updatePerson((draft) => {
    draft.artwork.title = e.target.value;
  });
}
```
