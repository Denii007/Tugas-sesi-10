# SauceDemo Automation Test

Automation testing pada website **SauceDemo** menggunakan **Selenium WebDriver** dan **Mocha**.

## Test Case
- Login sukses
- Sort produk dari Z ke A

## Hooks (Mocha)
Project ini menggunakan **Mocha Hooks** untuk mengatur lifecycle testing:
- `before` → digunakan untuk setup browser (inisialisasi WebDriver)
- `after` → digunakan untuk menutup browser setelah seluruh test selesai

## Test Report
Hasil pengujian automation dapat dilihat pada folder:
`mochawesome-report`

Folder ini disertakan sebagai **bukti hasil pengujian** untuk kebutuhan evaluasi LMS.

## Cara Menjalankan
```bash
npm install
npm run test-coba
