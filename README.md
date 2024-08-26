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









