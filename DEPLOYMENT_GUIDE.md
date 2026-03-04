# Marshk Website - Deployment & Testing Guide

## 📋 Pre-Deployment Checklist

### ✅ Testing Requirements

#### 1. **Functionality Testing**
- [ ] All navigation links work correctly
- [ ] Hero slider transitions smoothly (auto-advances every 5 seconds)
- [ ] Featured carousel auto-advances (4-second intervals)
- [ ] Mobile hamburger menu opens/closes
- [ ] Mobile menu links close menu after click
- [ ] Smooth scroll to anchor links works
- [ ] Quotation form validation works
- [ ] Form submission shows success message
- [ ] Gallery categories display correct images
- [ ] Lightbox opens/closes
- [ ] Lightbox navigation (arrows, keyboard)
- [ ] Gallery category scroll buttons work
- [ ] Logo carousel auto-scrolls
- [ ] Counter animations trigger on scroll

#### 2. **Responsive Design Testing**
- [ ] Test on mobile (320px, 375px, 414px)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1024px, 1280px, 1920px)
- [ ] Test orientation changes (portrait → landscape)
- [ ] Touch interactions work on mobile
- [ ] Swipe to scroll gallery on mobile
- [ ] Form inputs are accessible on mobile
- [ ] Navigation menu scales properly

#### 3. **Performance Testing**
- [ ] Page loads in < 3 seconds (3G)
- [ ] Lazy-loaded images load on scroll
- [ ] No layout shifts (CLS < 0.1)
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Test with Google PageSpeed Insights
- [ ] Test with WebPageTest

#### 4. **Accessibility Testing**
- [ ] Keyboard navigation works (Tab key)
- [ ] Focus outline visible on interactive elements
- [ ] ARIA labels present on form inputs
- [ ] Image alt text is descriptive
- [ ] Color contrast meets WCAG AA standard (4.5:1 for text)
- [ ] Form labels associated with inputs
- [ ] Skip-to-main-content link functional
- [ ] No automatic content plays sound

#### 5. **Browser Compatibility**
- [ ] Chrome (latest & -1 version)
- [ ] Firefox (latest & -1 version)
- [ ] Safari (latest & -1 version)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS 12+)
- [ ] Chrome Mobile (Android 5+)
- [ ] Samsung Internet

#### 6. **Cross-Browser Testing**
- [ ] CSS Grid and Flexbox render correctly
- [ ] Transitions and animations work
- [ ] SVG icons display properly
- [ ] Form validation works
- [ ] LocalStorage/SessionStorage functional

#### 7. **Content Testing**
- [ ] All text is readable and properly formatted
- [ ] Images display without distortion
- [ ] Video (if any) plays correctly
- [ ] Links point to correct destinations
- [ ] Email links are functional
- [ ] Phone links format correctly
- [ ] Social media links are correct
- [ ] PDF download links work

#### 8. **Security Testing**
- [ ] HTTPS enabled on production
- [ ] No console errors or warnings
- [ ] No mixed content warnings
- [ ] Form data sanitized
- [ ] XSS protection enabled
- [ ] CSRF tokens on forms (if applicable)
- [ ] No sensitive data in code
- [ ] Security headers configured

---

## 🚀 Deployment Steps

### Option 1: GitHub Pages (Free)
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit"

# Create repository on github.com
# Name: yourusername.github.io

# Push to GitHub
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```
**Your site will be live at:** `https://yourusername.github.io`

### Option 2: Netlify (Free with custom domain)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Connect to git for auto-deployment
netlify deploy --prod
```

### Option 3: Vercel (Free with Git integration)
1. Push code to GitHub
2. Go to vercel.com
3. Sign in with GitHub
4. Import project
5. Deploy with one click

### Option 4: Traditional Web Host (using FTP)
1. Connect to server via FTP (FileZilla, WinSCP)
2. Upload all files to `public_html` directory
3. Set file permissions:
   - Directories: 755
   - Files: 644
4. Verify website is live
5. Configure SSL certificate

---

## 📝 Pre-Launch Checklist

### Domain & DNS
- [ ] Domain registered
- [ ] DNS records configured
- [ ] SSL certificate installed
- [ ] HTTPS redirect active
- [ ] Email forwarding set up (if needed)

### SEO Optimization
- [ ] Meta titles optimized (50-60 chars)
- [ ] Meta descriptions optimized (150-160 chars)
- [ ] Meta keywords added
- [ ] robots.txt configured
- [ ] sitemap.xml generated
- [ ] Google Search Console configured
- [ ] Bing Webmaster Tools configured
- [ ] Open Graph tags added

### Performance Optimization
- [ ] Images compressed (< 100KB for thumbnails)
- [ ] CSS minified
- [ ] JavaScript minified
- [ ] Caching headers configured
- [ ] GZIP compression enabled
- [ ] CDN enabled (if available)

### Analytics & Monitoring
- [ ] Google Analytics configured
- [ ] Google Tag Manager (optional)
- [ ] Error tracking set up (Sentry/Bugsnag)
- [ ] Uptime monitoring enabled
- [ ] Form submission tracking
- [ ] Conversion tracking configured

### Email Configuration
- [ ] Contact form backend configured
- [ ] Email notifications enabled
- [ ] MX records configured
- [ ] SPF records added
- [ ] DKIM configured

---

## 🔧 Production Configuration

### Environment Variables
Create `.env` file with:
```
FORM_ENDPOINT=https://your-backend.com/api/quotation
ANALYTICS_ID=G-XXXXX
API_KEY=your-api-key
```

### Update Links
- [ ] Update all API endpoints
- [ ] Update form submission endpoint
- [ ] Update analytics IDs
- [ ] Update social media URLs
- [ ] Update support email/phone

### Configure Web Server

#### For Apache (.htaccess)
```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE text/javascript
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache control
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
</IfModule>

# Redirect HTTP to HTTPS
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

#### For Nginx
```nginx
# Enable compression
gzip on;
gzip_types text/plain text/css text/javascript application/json;
gzip_vary on;

# Cache control
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# HTTP to HTTPS redirect
server {
    listen 80;
    server_name marshk.com;
    return 301 https://$server_name$request_uri;
}
```

---

## 📊 Post-Launch Monitoring

### Weekly Checks
- [ ] Check Analytics for traffic anomalies
- [ ] Monitor form submissions
- [ ] Check error logs
- [ ] Verify all pages load
- [ ] Test critical functionality
- [ ] Check mobile responsiveness
- [ ] Verify email notifications

### Monthly Tasks
- [ ] Review analytics reports
- [ ] Check SEO rankings
- [ ] Update content if needed
- [ ] Review and respond to inquiries
- [ ] Check for broken links
- [ ] Review server logs
- [ ] Update dependencies/CMS

### Quarterly Maintenance
- [ ] Full security audit
- [ ] Performance optimization review
- [ ] Backup verification
- [ ] SSL certificate renewal check
- [ ] Update content calendar
- [ ] Competitor analysis
- [ ] User feedback review

---

## 🐛 Common Issues & Solutions

### Issue: Images not loading
**Solution:**
- Verify image paths are correct
- Check file permissions (644)
- Clear browser cache
- Test on incognito mode
- Check image file format

### Issue: Form not submitting
**Solution:**
- Check form endpoint URL
- Verify CORS headers
- Check form validation
- Review browser console for errors
- Test with curl: `curl -X POST https://your-backend.com/api/quotation`

### Issue: Slow page load
**Solution:**
- Compress images further
- Enable caching headers
- Minify CSS/JS
- Enable CDN
- Check server response time
- Run PageSpeed Insights

### Issue: SEO not improving
**Solution:**
- Verify sitemap.xml submission
- Check robots.txt
- Update meta tags
- Add internal links
- Improve content quality
- Build backlinks
- Wait 4-6 weeks for indexing

---

## 📞 Support & Contact

For technical issues or questions:
- Email: info@marshk.com
- Phone: [Your Phone Number]
- Response time: 24 hours
- Support hours: 9 AM - 5 PM (EST)

---

## 📚 Resources

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WAVE Accessibility Tool](https://wave.webaim.org/)
- [Validator W3C](https://validator.w3.org/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse CLI](https://developers.google.com/web/tools/lighthouse)

---

**Last Updated:** March 4, 2026
**Version:** 1.0
**Status:** Production Ready
