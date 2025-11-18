# BeInOptions - Setup Guide

## 🚀 Быстрый старт

### 1. Установка
```bash
npm install
npm run dev
```

### 2. Настройка SEO (для Google Search Console)

Создайте файл `.env.local` в корне проекта:

```bash
NEXT_PUBLIC_SITE_URL=https://beinoptions.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=ваш_код_верификации_из_GSC
```

#### Как получить код верификации:
1. Зайдите на https://search.google.com/search-console
2. Добавьте ресурс: `https://beinoptions.com`
3. Выберите метод "HTML-тег"
4. Скопируйте код (только содержимое `content="..."`)
5. Вставьте в `.env.local`
6. Перезапустите сервер: `npm run dev`
7. Нажмите "Подтвердить" в Google Search Console
8. Добавьте sitemap: `https://beinoptions.com/sitemap.xml`

### 3. Google Analytics (опционально)
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 📁 Структура проекта

```
BeInOption/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Многоязычные страницы
│   │   ├── robots.ts           # SEO: robots.txt
│   │   └── sitemap.ts          # SEO: sitemap.xml
│   ├── components/
│   │   ├── AnimatedLogo.tsx    # Анимированный логотип
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── seo/
│   │       ├── SEOHead.tsx     # Метатеги
│   │       └── StructuredData.tsx  # JSON-LD схемы
│   └── hooks/
└── public/
```

## ✨ Основные функции

### SEO оптимизация
- ✅ Динамические метатеги для каждой страницы
- ✅ Open Graph и Twitter Card теги
- ✅ Структурированные данные (JSON-LD)
- ✅ Автоматический sitemap.xml
- ✅ Настроенный robots.txt
- ✅ Поддержка мультиязычности (DE/EN)

### Компоненты
- ✅ Анимированный логотип "Be In Options"
- ✅ Google Analytics интеграция
- ✅ Glossary с автоподсветкой терминов
- ✅ Адаптивный дизайн

## 🔧 Разработка

### Добавление SEO на новую страницу

```typescript
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }) {
  return genMeta({
    title: 'Заголовок страницы',
    description: 'Описание 150-160 символов',
    keywords: ['ключ1', 'ключ2'],
    locale: locale,
  });
}
```

### Добавление структурированных данных

```typescript
import { ArticleSchema } from '@/components/seo/StructuredData';

export default function BlogPost() {
  return (
    <>
      <ArticleSchema
        title="Название статьи"
        description="Описание"
        publishedTime="2025-01-15T10:00:00Z"
        url="https://beinoptions.com/blog/article"
        locale="de"
      />
      {/* Контент */}
    </>
  );
}
```

## 📊 Проверка SEO

- **Meta tags**: https://metatags.io/
- **Structured data**: https://search.google.com/test/rich-results
- **Mobile**: https://search.google.com/test/mobile-friendly
- **Speed**: https://pagespeed.web.dev/

## 🌐 Полезные ссылки

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com/)
- [Next.js Docs](https://nextjs.org/docs)

---

**Нужна помощь?** Проверьте логи сервера или консоль браузера (F12) для отладки.
