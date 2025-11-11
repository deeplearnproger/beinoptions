# WordPress Headless CMS Setup Guide

This guide will help you set up WordPress as a headless CMS for BeInOptions.

## Prerequisites

- WordPress 6.0+ installed
- Basic knowledge of WordPress admin panel
- FTP/SSH access to your server

## Step 1: Install Required Plugins

### 1.1 Multilingual Plugin (Choose one)

**Option A: WPML (Recommended - Premium)**

1. Purchase WPML Multilingual CMS from wpml.org
2. Install and activate WPML
3. Configure languages:
   - Go to WPML → Languages
   - Add German (Deutsch) as default language
   - Add English as secondary language
4. Enable language switcher in WPML settings

**Option B: Polylang (Free Alternative)**

1. Install Polylang from WordPress Plugin Directory
2. Go to Languages → Settings
3. Add German (de_DE) and English (en_US)
4. Choose "Post name" for URL modifications

### 1.2 Essential Plugins

Install these from WordPress Admin → Plugins → Add New:

1. **Advanced Custom Fields (ACF)** - For custom content fields
2. **Yoast SEO** - For SEO optimization
3. **JWT Authentication for WP REST API** - For secure API access

## Step 2: Configure WordPress REST API

### 2.1 Enable REST API

The REST API is enabled by default in WordPress. Test it:

```
https://your-site.com/wp-json/wp/v2/posts
```

### 2.2 Configure Permalinks

1. Go to Settings → Permalinks
2. Select "Post name" structure
3. Save changes

### 2.3 Increase API Limits

Add to your theme's `functions.php`:

```php
// Increase REST API results per page
add_filter('rest_post_query', 'increase_rest_api_limit', 10, 2);
function increase_rest_api_limit($args, $request) {
    $args['posts_per_page'] = 100;
    return $args;
}

// Enable CORS for Next.js
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        return $value;
    });
}, 15);
```

## Step 3: Create Content Structure

### 3.1 Categories

Create these categories (in both DE and EN):

- Marktanalyse / Market Analysis
- Trader-Stories / Trader Stories
- Strategie-Guides / Strategy Guides
- News & Updates / News & Updates

### 3.2 Custom Fields (Optional with ACF)

Create a field group "Article Details":

1. Field: `reading_time` (Number) - Reading time in minutes
2. Field: `difficulty_level` (Select) - Beginner/Intermediate/Advanced
3. Field: `featured_emoji` (Text) - Emoji for article card

### 3.3 Sample Post Structure

Title (DE): "Volatilität verstehen und nutzen"
Title (EN): "Understanding and Using Volatility"

Content: Rich text with headings, lists, images
Categories: Marktanalyse / Market Analysis
Tags: Volatilität, Trading, Strategie

## Step 4: Content Management Workflow

### 4.1 Creating Multilingual Posts

**With WPML:**
1. Create post in German (default language)
2. Click "+" icon next to language in WPML box
3. Translate to English

**With Polylang:**
1. Create post in German
2. In "Languages" metabox, click "+" for English
3. Create English version

### 4.2 Featured Images

1. Upload high-quality images (1200x630px recommended)
2. Add descriptive alt text for SEO
3. Use WebP format for better performance

### 4.3 SEO with Yoast

1. Set focus keyphrase for each post
2. Optimize meta description (155 characters)
3. Ensure readability score is green
4. Check both language versions

## Step 5: Connect to Next.js

### 5.1 Configure Environment

In your Next.js project's `.env.local`:

```env
WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

### 5.2 Test Connection

Run this in your terminal:

```bash
curl https://your-wordpress-site.com/wp-json/wp/v2/posts
```

You should see JSON data of your posts.

### 5.3 Update Blog Page

Replace the static blog posts in `src/app/[locale]/blog/page.tsx`:

```typescript
import { getPosts, formatExcerpt, getAuthorName } from '@/lib/wordpress';

export default async function BlogPage({ params: { locale } }) {
  const posts = await getPosts(locale, 10);

  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title.rendered}</h2>
          <p>{formatExcerpt(post.excerpt.rendered)}</p>
          <span>By {getAuthorName(post)}</span>
        </article>
      ))}
    </div>
  );
}
```

## Step 6: Performance Optimization

### 6.1 Caching

Install **WP REST Cache** plugin:
1. Go to Plugins → Add New
2. Search "WP REST Cache"
3. Install and activate
4. No configuration needed

### 6.2 Image Optimization

Install **ShortPixel** or **Smush**:
1. Compress uploaded images automatically
2. Convert to WebP format
3. Lazy loading enabled

### 6.3 CDN (Optional)

Use Cloudflare for WordPress:
1. Sign up at cloudflare.com
2. Add your site
3. Update nameservers
4. Enable caching and optimization

## Step 7: Security

### 7.1 Disable XML-RPC

Add to `wp-config.php`:

```php
add_filter('xmlrpc_enabled', '__return_false');
```

### 7.2 Hide WordPress Version

Add to `functions.php`:

```php
remove_action('wp_head', 'wp_generator');
```

### 7.3 Limit Login Attempts

Install **Limit Login Attempts Reloaded**:
- Prevents brute force attacks
- Configurable lockout duration

### 7.4 SSL Certificate

Ensure your WordPress site uses HTTPS:
1. Install SSL certificate (Let's Encrypt is free)
2. Update site URL in Settings → General
3. Force HTTPS in wp-config.php:

```php
define('FORCE_SSL_ADMIN', true);
```

## Step 8: Backup Strategy

### 8.1 Automated Backups

Install **UpdraftPlus**:
1. Configure daily backups
2. Store in Google Drive or Dropbox
3. Include database and files

### 8.2 Manual Backup Before Updates

Always backup before:
- WordPress core updates
- Plugin updates
- Theme changes
- Major content changes

## Step 9: Content Publishing Checklist

Before publishing each post:

- [ ] Content written in both German and English
- [ ] Featured image added (1200x630px)
- [ ] Categories assigned
- [ ] Tags added (3-5 relevant tags)
- [ ] Yoast SEO optimized (green light)
- [ ] Meta description written
- [ ] Internal links added
- [ ] Images have alt text
- [ ] Reading time set (if using ACF)
- [ ] Preview in both languages
- [ ] Schedule or publish

## Step 10: Maintenance

### Daily Tasks
- Monitor comments (if enabled)
- Check for spam

### Weekly Tasks
- Review analytics
- Check for broken links
- Update outdated content

### Monthly Tasks
- Update plugins
- Review and optimize database
- Check backups
- Review security logs

### Quarterly Tasks
- Update WordPress core
- Full site audit
- Performance testing
- Content gap analysis

## Troubleshooting

### REST API Not Working

1. Check permalink structure (must be "Post name")
2. Verify .htaccess file exists and is writable
3. Flush rewrite rules: Settings → Permalinks → Save
4. Check for conflicting plugins

### Multilingual Content Not Showing

1. Verify WPML/Polylang is active
2. Check language configuration
3. Ensure content is translated
4. Clear WordPress cache

### CORS Errors

Add this to `functions.php`:

```php
add_action('rest_api_init', function() {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
}, 15);
```

### Slow API Response

1. Install caching plugin
2. Optimize database with WP-Optimize
3. Reduce posts_per_page in API calls
4. Enable CDN

## Additional Resources

- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [WPML Documentation](https://wpml.org/documentation/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Headless WordPress Best Practices](https://www.wpgraphql.com/docs/headless-wordpress-best-practices)

## Support

For WordPress-specific issues:
- [WordPress Support Forums](https://wordpress.org/support/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/wordpress)

For integration issues:
- Contact: info@beinoption.de
- Check the main README.md for Next.js troubleshooting

---

**Good luck with your WordPress setup! 🚀**
