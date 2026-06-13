# Yunus Portfolyo Projesi — Tam Proje Brief'i
> Bu dosya, projenin tüm kararlarını ve teknik detaylarını içerir.
> Agent'a her oturumda context olarak ver.

---

## 1. Proje Sahibi

**Ad:** Yunus Mümin Aydınoğlu
**Konum:** Gazimağusa, KKTC
**İletişim:** yunusmmn.contact@gmail.com | +90 548 859 39 94
**LinkedIn:** linkedin.com/in/yunus-aydinoglu/

### Arka plan
- Doğu Akdeniz Üniversitesi Bilgisayar Mühendisliği son sınıf, CGPA 3.06, onur öğrencisi
- Huawei İstanbul R&D Office — AI Research Engineering Intern (Temmuz–Ağustos 2024)
- EMU Software & AI Development Club — Eğitimden Sorumlu Başkan Yardımcısı (Eylül 2023–günümüz)
- AISummit'25 ve AISummit'26 organizasyon yönetim kurulu (KKTC'nin en büyük AI zirvesi)
- DataHarvest — Teknofest 2025 Tarım kategorisi 8. place
- ADPilot — Bitirme projesi, LLM + RAG tabanlı reklam platformu
- Chip Head — EMU GameJam #4 oyunu (itch.io'da yayında)

### Teknik yetenek seti
Flutter, PHP/Laravel, Python, C, Java, C#, LLM, RAG, OOP,
Veri Yapıları & Algoritmalar, Machine Learning, NLP,
Pandas/NumPy, Oyun Tasarımı & Geliştirme, Takım & Proje Yönetimi

### Diller
Türkçe (anadil), İngilizce (orta-üstü), Rusça (başlangıç)

---

## 2. Hedef & Strateji

### Amaç
- KKTC ve Türkiye'de iş bulmak (tam zamanlı veya staj)
- Freelance iş almak (KKTC + TR + bölgedeki yabancı işletmeler)

### Hedef kitle
- KKTC ve Türkiye'deki yazılım/teknoloji şirketleri
- KKTC'deki küçük ve orta ölçekli işletmeler (freelance müşteri)
- Bölgedeki yabancı girişimciler ve expat iş sahipleri

### Dil politikası
- Tüm sitelerde **Türkçe + İngilizce** eş zamanlı
- Dil seçici (TR / EN) navbar'da sabit
- Varsayılan dil: Türkçe

---

## 3. Projeler (3 Adet)

### Proje 1 — yunus.dev (Kişisel Portfolyo)
**Amaç:** İşe başvuru için kişisel vitrin. "Bu adam kim ve ne yapar?" sorusunu 3 saniyede yanıtlamalı.

**Sayfa yapısı:**
```
/                → Hero + kısa özet + öne çıkan projeler + sayılar
/about           → Detaylı bio, timeline, AISummit deneyimi, CV indir
/projects        → Tüm projeler, filtreli (AI / Mobile / Game / All)
/projects/[slug] → Her proje için ayrı sayfa (blog'a yönlendiren link)
/blog            → Yazı listesi, kategori + dil filtresi
/blog/[slug]     → MDX vaka çalışması / teknik yazı
/playground      → Tarayıcıda çalışan Python demoları, ML görselleştirmeleri (Pyodide)
/uses            → Araçlar ve kurulum (teknik işe alımcılar için)
```

**Proje → Blog akışı (ÖNEMLİ):**
ADPilot ve DataHarvest'ın yayında çalışan bir linki yok.
Proje kartındaki "Vaka çalışması →" butonu direkt ilgili blog yazısına yönlendirir.
Blog yazısında: problem tanımı + mimari diyagram + ekran görüntüleri + öğrendikler + teknoloji stack'i.
Chip Head'in itch.io linki var, direkt link verilebilir.
DesignPilot için "Yakında →" yazılır.

**İçerik blokları:**
- Hero: eyebrow label + display başlık (isim italik aksan) + kısa bio + badge'ler + CTA butonları
- Sayılar: GPA 3.06, Teknofest 8., AISummit 2× organizatör
- Proje kartları: numara + badge + başlık + açıklama + tag'ler + "Vaka çalışması →"
- Blog listesi: başlık + kategori badge + tarih
- İletişim: form + LinkedIn linki

---

### Proje 2 — yunusSoft (Hizmet & Ajans Sitesi)
**Amaç:** Freelance müşteri çekmek. Ton: profesyonel ama ulaşılabilir, "güvenilir uzman" hissi.

**Sayfa yapısı:**
```
/                → Hero + hizmetler + referanslar + CTA
/services        → LLM entegrasyonu, RAG, mobil uygulama, web geliştirme
/work            → Vaka çalışmaları (ADPilot, DataHarvest) — yunus.dev blog'uyla aynı içerik
/about           → Vizyon, KKTC odağı, kim olduğun
/contact         → Form + WhatsApp direkt link
```

**Kritik özellikler:**
- WhatsApp butonu (KKTC'de iletişim tercihi)
- "Ücretsiz keşif görüşmesi" CTA
- TR + EN dil desteği (yabancı müşteriler için EN kritik)

---

### Proje 3 — DesignPilot (AI Tasarım Danışmanı)
**Amaç:** Amatör poster/afiş/Instagram postu yapan kişilere profesyonel tasarım tavsiyeleri veren AI aracı.

**MVP özellikleri:**
- Görsel yükleme arayüzü
- Claude Vision API ile analiz
- Türkçe tavsiyeler + skor kartı

**Modüller (MVP → v2 → v3 sırasıyla):**

| Versiyon | Modül | Açıklama |
|---|---|---|
| MVP | Kompozisyon analizi | Rule of thirds, hizalama, negatif alan |
| MVP | Renk teorisi | Palet uyumu, kontrast, renk psikolojisi |
| v2 | Tipografi analizi | Font okunabilirliği, hiyerarşi |
| v2 | Mesaj aktarımı | "Bu poster ne anlatıyor, ne kadar başarıyor?" skoru |
| v2 | Platform uyumu | Instagram 1:1 / 4:5 / Story 9:16 / A4 ratio kontrolü |
| v2 | Canvas overlay | Rule of thirds grid, ölçü çizgileri görsel üzerinde |
| v3 | PDF rapor | Analiz sonuçlarını PDF olarak indir |
| v3 | API erişimi | yunusSoft üzerinden satılabilir |

**Teknik stack:**
- Backend: FastAPI (Python)
- Frontend: Next.js + React + react-dropzone
- AI: Anthropic API — claude-sonnet-4 (vision destekli)
- Depolama: Cloudflare R2 (görseller için, S3'ten ucuz)
- Veritabanı: PostgreSQL
- Deploy: Kendi sunucusu (VPS)

---

## 4. Siteler Arası Bağlantı

```
yunus.dev  ──→  "Projelerim" bölümünde DesignPilot'a link
yunusSoft  ──→  "AI Çözümleri" hizmeti olarak DesignPilot'u öne çıkar
DesignPilot ──→  Footer: "yunusSoft tarafından geliştirildi" + link
```

Üç site aynı design system'i paylaşır. Birinden geçen biri hepsinin
aynı insan tarafından yapıldığını anlar.

---

## 5. Teknik Stack (Ortak)

| Katman | Teknoloji |
|---|---|
| Framework | Next.js 14 (App Router) |
| Dil | TypeScript |
| Stil | Tailwind CSS + tokens.css |
| Animasyon | Framer Motion |
| İçerik (blog) | MDX |
| Fontlar | Instrument Serif (display) + DM Sans (body) + Geist Mono (kod) |
| Form | Formspree veya kendi API endpoint'i |
| Deploy | Kendi VPS sunucusu |
| Versiyon kontrol | Git |

**DesignPilot için ek:**
- FastAPI backend
- Anthropic API (claude-sonnet-4, vision)
- Cloudflare R2
- PostgreSQL

---

## 6. Design System

### Ton & Felsefe
"Editorial Minimalism" — çok beyaz boşluk, tipografi ön planda,
küçük renk aksan noktaları. Görsele boğulmadan modernliği hissettiren.
Referans: Linear.app, Vercel.com tarzı ama daha sıcak.

### Tema
Sistem tercihini otomatik takip eder (`prefers-color-scheme`).
Varsayılan: sistem ne diyorsa o (light veya dark).

### Renk Paleti — Light Mode
```css
/* Zemin */
--bg-base:        #FAF7F2;   /* Ana sayfa zemini — sıcak krem/parşömen */
--bg-surface:     #F4EFE6;   /* Kartlar, paneller */
--bg-subtle:      #EDE5D8;   /* Hover, input arka planı */
--bg-muted:       #E0D6C8;   /* Ayırıcılar, disabled */

/* Yazı — DÜZELTILMIŞ (kontrast için koyulaştırıldı) */
--text-primary:   #1A1510;   /* Ana başlıklar */
--text-secondary: #2E2820;   /* Gövde metni */
--text-muted:     #6B5C48;   /* İkincil bilgi */
--text-faint:     #9C8E7A;   /* Meta, tarih */

/* Kenarlık */
--border-default: #D8CEBC;
--border-strong:  #C4B49C;
--border-subtle:  #EDE5D8;

/* Aksan — Koyu Sage */
--accent:         #4E7068;
--accent-hover:   #3D5A53;
--accent-active:  #2E4540;
--accent-subtle:  #E8F0EE;
--accent-text:    #2E4540;
```

### Renk Paleti — Dark Mode
```css
--bg-base:        #1A1710;   /* Koyu kahve — parşömenin gece hali */
--bg-surface:     #221F16;
--bg-subtle:      #2C2820;
--bg-muted:       #38332A;

--text-primary:   #F0EBE2;
--text-secondary: #C8BFB0;
--text-muted:     #948070;
--text-faint:     #6A5E52;

--border-default: #3E3830;
--border-strong:  #56504A;
--border-subtle:  #2C2820;

/* Aksan dark'ta biraz açılır — kontrast için */
--accent:         #6A9A8E;
--accent-hover:   #7EB0A4;
--accent-active:  #90C4B8;
--accent-subtle:  #1E2E2B;
--accent-text:    #90C4B8;
```

### Fontlar
```
Display (başlık): Instrument Serif — italic vurgu için çok iyi
Body (UI/metin):  DM Sans — weight 500 kullan (400 parşömende erir)
Mono (kod):       Geist Mono
```

### Font Ağırlıkları — KRİTİK KARAR
```
Başlıklar (h1-h6):     Instrument Serif 400 (serif doğal ağırlıklı)
Body metin:            DM Sans 500 (400 parşömen zeminde okunaksız kalıyor)
UI elementler:         DM Sans 500
Badge / küçük etiket:  DM Sans 600
Meta / tarih / faint:  DM Sans 500
```
> ⚠️ DM Sans 300 veya 400 KULLANMA — parşömen zemin üzerinde kontrast yetersiz.

### Tipografi Hiyerarşisi
```
Hero başlık:  Instrument Serif, clamp(36px, 6vw, 60px), italic vurgu = aksan rengi
H1: 48px  H2: 36px  H3: 30px  H4: 24px
Body: 16px, line-height 1.65
Small/meta: 12-13px
Badge/label: 11px, weight 600
```

### Köşe Yarıçapları
```
Küçük element / badge: 4px
Buton / input:         8px
Küçük kart:            12px
Standart kart:         14-16px
Büyük kart / hero:     24px
Pill (badge tam yuvarlak): 9999px
```

### Komponent Notları
- Buton: primary (sage dolu) / secondary (subtle bg) / ghost (şeffaf)
- Kart hover: `border-color → accent`, `translateY(-2px)`
- Input focus: `border-color → accent`, `box-shadow: 0 0 0 3px rgba(78,112,104,.12)`
- Navbar: sticky, height 60px, border-bottom 0.5px
- Logo: "ya." — Instrument Serif italic
- Dil seçici: pill switcher, navbar'da sağda

---

## 7. Proje Kartı İçerikleri

### ADPilot
- **Numara:** 01
- **Badge:** Bitirme Projesi (accent)
- **Başlık:** ADPilot
- **Açıklama:** LLM destekli reklam platformu. Kıbrıs KOBİ'lerine yönelik chatbot, RAG sistemi ve Meta & Google API entegrasyonu.
- **Tag'ler:** RAG, Python, LLM
- **Link:** Vaka çalışması → (blog'a yönlendir)
- **Canlı link:** YOK

### DataHarvest
- **Numara:** 02
- **Badge:** Teknofest 8. (accent)
- **Başlık:** DataHarvest
- **Açıklama:** Tarım IoT platformu. Sensör verisi yorumlama, öneri algoritması, Flutter mobil uygulama, Laravel backend.
- **Tag'ler:** Flutter, Laravel, RAG
- **Link:** Vaka çalışması → (blog'a yönlendir)
- **Canlı link:** YOK

### Chip Head
- **Numara:** 03
- **Badge:** Game Jam (muted)
- **Başlık:** Chip Head
- **Açıklama:** 48 saatte geliştirilen EMU GameJam #4 oyunu. Unity 2D ve C# ile yazılmış algoritmalar.
- **Tag'ler:** Unity, C#, Git
- **Link:** itch.io → (direkt dış link)
- **Canlı link:** https://kerembakim.itch.io/chip-head

### DesignPilot
- **Numara:** 04
- **Badge:** Geliştiriliyor (accent)
- **Başlık:** DesignPilot
- **Açıklama:** AI destekli tasarım analiz aracı. Renk teorisi, kompozisyon ve mesaj aktarım skoru.
- **Tag'ler:** Vision AI, FastAPI, Next.js
- **Link:** Yakında → (link yok, pasif)
- **Canlı link:** YOK (henüz)

---

## 8. Blog / Vaka Çalışması Formatı

Her proje için blog yazısı şu bölümleri içerir:

```markdown
# [Proje Adı] — [Kısa açıklama]

[Kapak görseli veya mimari diyagram]

## Problem
[Ne sorunu çözüyor, hedef kitle kim]

## Çözüm
[Genel yaklaşım, mimari özeti]
[Diyagram veya akış şeması]

## Teknik detaylar
[Stack, entegrasyonlar, kritik kararlar]
[Ekran görüntüleri]

## Karşılaşılan zorluklar
[Gerçek mücadeleler — işverenler bunu sever]

## Öğrendiklerim
[Dürüst çıkarımlar]

## Sonuç
[Teknoloji badge'leri]
[Varsa: GitHub / demo / itch.io linki]
```

> Blog yazıları hem TR hem EN yazılır (dil seçici filtreler).
> Kategori sistemi: `vaka-calismasi` | `teknik` | `deneyim`

---

## 9. Başlangıç Sırası

```
1. yunus.dev      — İşe başvuru için öncelikli, önce bu bitmeli
2. DesignPilot    — yunus.dev'e portfolyo projesi olarak giriyor,
                    yunusSoft'un vitrin ürünü olacak
3. yunusSoft      — Referanslar ve projeler hazır olunca daha güçlü çıkar
```

---

## 10. Genel Kurallar & Notlar

- **Production kalitesi zorunlu:** Giren kişi "bu profesyonel iş" demeli
- **Okunabilirlik öncelik:** Tasarım asla okunabilirliği ezmemeli
- **DM Sans 400 veya altı kullanma** (light modda parşömen zeminde erir)
- **Her üç site aynı tokens.css'i paylaşır** — tutarlılık şart
- **Blog sistemi MDX** — içerik düz markdown, component'ler enjekte edilebilir
- **Chip Head dışında canlı link yok** — ADPilot ve DataHarvest blog'a yönlendir
- **WhatsApp linki** yunusSoft'ta zorunlu (KKTC iletişim tercihi)
- **SEO:** Her sayfa proper meta tag, OG tag, canonical URL
- **Erişilebilirlik:** Alt text, semantic HTML, focus states
- **Dil:** tr locale varsayılan, en locale paralel

---

## 11. Dosyalar (Hazır Olanlar)

| Dosya | İçerik |
|---|---|
| `tokens.css` | Tüm CSS değişkenleri, light+dark mode, komponent sınıfları |
| `tailwind.config.ts` | Token'ları Tailwind'e bağlayan config |
| `fonts.ts` | Next.js font optimizasyonu (Instrument Serif + DM Sans + Geist Mono) |
| `layout.tsx` | Root layout şablonu, meta tag'ler dahil |
| `DESIGN-SYSTEM-REFERENCE.md` | Hızlı başvuru kartı |

> Bu dosyalar projenin `src/styles/` ve `src/lib/` klasörlerine yerleştirilmeli.
