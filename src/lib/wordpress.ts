// WordPress Headless CMS Integration
// This file provides utilities to fetch content from WordPress REST API

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://your-wordpress-site.com/wp-json/wp/v2';

export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{
      name: string;
    }>;
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

export interface WordPressPage {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

// Fetch all posts with optional filters
export async function getPosts(
  locale: string = 'de',
  limit: number = 10,
  category?: string
): Promise<WordPressPost[]> {
  try {
    const params = new URLSearchParams({
      per_page: limit.toString(),
      _embed: 'true',
      lang: locale, // Assuming WPML or Polylang plugin for multilingual support
      ...(category && { categories: category }),
    });

    const response = await fetch(`${WORDPRESS_API_URL}/posts?${params}`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Fetch a single post by slug
export async function getPostBySlug(slug: string, locale: string = 'de'): Promise<WordPressPost | null> {
  try {
    const params = new URLSearchParams({
      slug,
      _embed: 'true',
      lang: locale,
    });

    const response = await fetch(`${WORDPRESS_API_URL}/posts?${params}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }

    const posts: WordPressPost[] = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Fetch a page by slug
export async function getPageBySlug(slug: string, locale: string = 'de'): Promise<WordPressPage | null> {
  try {
    const params = new URLSearchParams({
      slug,
      lang: locale,
    });

    const response = await fetch(`${WORDPRESS_API_URL}/pages?${params}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch page');
    }

    const pages: WordPressPage[] = await response.json();
    return pages.length > 0 ? pages[0] : null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

// Fetch categories
export async function getCategories(locale: string = 'de') {
  try {
    const params = new URLSearchParams({
      per_page: '100',
      lang: locale,
    });

    const response = await fetch(`${WORDPRESS_API_URL}/categories?${params}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Format post excerpt
export function formatExcerpt(excerpt: string, maxLength: number = 150): string {
  const text = excerpt.replace(/<[^>]*>/g, ''); // Remove HTML tags
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// Get author name from embedded data
export function getAuthorName(post: WordPressPost): string {
  return post._embedded?.author?.[0]?.name || 'Unknown Author';
}

// Get featured image URL
export function getFeaturedImageUrl(post: WordPressPost): string | null {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
}

// Get categories from embedded data
export function getPostCategories(post: WordPressPost): Array<{ id: number; name: string; slug: string }> {
  const terms = post._embedded?.['wp:term'];
  if (!terms || terms.length === 0) return [];

  // First array in terms is categories
  return terms[0] || [];
}
