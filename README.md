# Marshk - Professional Website Documentation

## 🎯 Project Overview

This is a modern, professional, responsive website for **Marshk Investments Limited**, a leading construction services provider specializing in Telecommunication and Energy Infrastructure Services.

## 📁 Project Structure

```
marshk/
├── index.html              # Main landing page
├── gallery.html            # Project gallery with lightbox
├── assets/
│   ├── css/
│   │   └── styles.css      # Custom CSS animations and styles
│   ├── js/
│   │   └── script.js       # Interactive functionality
│   └── images/
│       ├── logo.jpeg       # Marshk company logo
│       └── *.jpeg          # Project photos (45+ images)
└── README.md              # This file
```

## ✨ Key Features

### 🎨 Design & Styling
- **Modern Design** - Clean, professional corporate aesthetic
- **Responsive Layout** - Mobile-first approach with perfect desktop/tablet/mobile experience
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Custom Animations** - Fade-in, scroll reveal, hover effects, and smooth transitions
- **Brand Colors** - Professional blue and gray color scheme suitable for infrastructure company
- **Google Fonts** - Poppins font for modern typography

### 🧩 Components & Sections

#### Landing Page (index.html)
1. **Navigation Bar** - Sticky navbar with mobile hamburger menu
2. **Hero Section** - Eye-catching gradient background with animated blobs and CTA buttons
3. **About Section** - Company overview, mission, vision, and key stats
4. **Services Section** - 6 service cards with icons and descriptions
5. **Why Choose Us** - 6 value propositions with checkmarks
6. **Gallery Preview** - Featured project showcase with link to full gallery
7. **Call-to-Action** - Contact section with email link
8. **Footer** - Complete footer with links, social media, and copyright

#### Gallery Page (gallery.html)
1. **Category-Based Horizontal Galleries** - Scrollable tracks grouped by project type
2. **Lightbox Modal** - Click to view full-size images with smooth animations
3. **Keyboard Navigation** - Arrow keys to navigate, Escape to close
4. **Image Counter** - Current image position display
5. **Mobile Friendly** - Touch-responsive gallery on mobile devices

### ⚡ Interactive Features
- **Mobile Menu Toggle** - Hamburger menu for mobile navigation
- **Smooth Scrolling** - Smooth scroll to sections with hash links
- **Active Nav Highlighting** - Current section highlighted in navigation
- **Scroll Reveal Animations** - Elements fade in as they come into view
- **Back-to-Top Button** - Appears when scrolling down
- **Form Validation** - Client-side form validation with error handling
- **Keyboard Shortcuts** - Support for keyboard navigation and shortcuts
- **Performance Monitoring** - Tracks and logs Core Web Vitals

### 🔧 Technical Stack
- **HTML5** - Semantic HTML structure
- **CSS3** - Advanced animations and transitions
- **JavaScript** - Vanilla JS (no dependencies)
- **Tailwind CSS** - Via CDN for utility classes
- **Google Fonts** - Poppins font family

## 🚀 Getting Started

### Option 1: Open in Browser (Quickest)
1. Navigate to the `marshk` directory
2. Double-click `index.html` to open in your default browser
3. Website will load and be fully functional

### Option 2: Use Local Server (Recommended for Development)

#### Using Python 3:
```bash
cd ~/Downloads/marshk
python3 -m http.server 8000
```

#### Using Python 2:
```bash
cd ~/Downloads/marshk
python -m SimpleHTTPServer 8000
```

#### Using Node.js (http-server):
```bash
npm install -g http-server
cd ~/Downloads/marshk
http-server
```

Then open `http://localhost:8000` in your browser.

### Option 3: Use VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Website opens automatically with live reload

## 🎨 Customization Guide

### 1. Update Company Information
Edit `index.html`:

**Logo in Navigation:**
```html
<img src="assets/images/logo.jpeg" alt="Marshk Logo" class="h-12 w-auto">
```

**Company Name:**
```html
<span class="text-2xl font-bold text-gray-900">Marshk</span>
```

**Hero Section Content:**
```html
<h1>Building Tomorrow's <span class="text-blue-400">Infrastructure</span></h1>
<p>Marshk is a leading Construction Services Provider...</p>
```

**About Section:**
Update the mission, vision, and company overview text.

### 2. Modify Services
In the Services Section of `index.html`, edit the 6 service cards:
```html
<h3>Service Title</h3>
<p>Service description...</p>
```

### 3. Update Contact Information
**Email:**
```html
<a href="mailto:your-email@marshk.com">your-email@marshk.com</a>
```

**Phone:**
```html
<a href="tel:+254XXXXXXXXX">+254XXXXXXXXX</a>
```

**Address:**
```html
<span>Your Company Address</span>
```

### 4. Social Media Links
Update footer social links:
```html
<a href="https://linkedin.com/company/marshk" class="hover:text-blue-400">LinkedIn</a>
<a href="https://twitter.com/marshk" class="hover:text-blue-400">Twitter</a>
<a href="https://facebook.com/marshk" class="hover:text-blue-400">Facebook</a>
```

### 5. Change Brand Colors
Edit the color values in the CSS and HTML sections. Primary colors:
- **Primary Blue:** `#2563eb` (use `text-blue-600`, `bg-blue-600`, etc.)
- **Dark Gray:** `#1f2937` (text-gray-900, bg-gray-900)
- **Light Gray:** `#f3f4f6` (bg-gray-50)

To change globally:
1. Find and replace colors in `index.html` and `gallery.html`
2. Update CSS variables in `assets/css/styles.css`
3. Replace Tailwind color classes (e.g., `bg-blue-600` → `bg-green-600`)

### 6. Gallery Management
The gallery uses categorized image arrays inside `gallery.html` and renders them dynamically.

**To add new images:**
1. Copy images to `assets/images/` folder
2. Add each filename to the relevant category in `imagesByCategory` inside `gallery.html`
3. Reload `gallery.html` - lightbox navigation will update automatically

**To remove images:**
1. Delete image files from `assets/images/`
2. Reload gallery page

### 7. Update Stats
In About Section, modify counters:
```html
<div class="text-3xl font-bold text-blue-600 mb-2">50+</div>
<p class="text-gray-700 text-sm">Projects Completed</p>
```

## 📱 Responsive Breakpoints

Website is optimized for:
- **Mobile:** 320px - 640px
- **Tablet:** 641px - 1024px
- **Desktop:** 1025px and above

Test responsiveness:
1. Open website in browser
2. Press F12 to open DevTools
3. Click device toggle icon
4. Select different devices to preview

## 🔍 SEO Optimization

### Meta Tags
Update in both HTML files:
```html
<meta name="description" content="Your company description">
<meta name="keywords" content="infrastructure, construction">
<meta name="theme-color" content="#1f2937">
```

### Structured Data
Add to `index.html` for better search results:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Marshk",
  "description": "...",
  "url": "https://yourdomain.com"
}
</script>
```

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create GitHub account
2. Create repository named `yourusername.github.io`
3. Push website files to main branch
4. Website auto-deploys to `https://yourusername.github.io`

### Option 2: Netlify (Free Tier)
1. Push code to GitHub
2. Go to netlify.com
3. Click "New site from Git"
4. Connect GitHub and select repository
5. Deploy automatically with each push

### Option 3: Vercel (Free Tier)
1. Go to vercel.com
2. Sign in with GitHub
3. Import project
4. Deploy with single click
5. Custom domain support included

### Option 4: Traditional Web Host
1. Upload all files via FTP to your web server
2. Ensure file permissions are set correctly (755 for directories, 644 for files)
3. Update any backend references in forms if needed

## 🔐 Security Considerations

### Contact Form
Currently, the contact form shows a demo message. To send actual emails:

**Option 1: Formspree**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

**Option 2: EmailJS**
```javascript
// Add to assets/js/script.js
emailjs.init("YOUR_PUBLIC_KEY");
form.addEventListener('submit', function(e) {
    emailjs.sendForm('service_id', 'template_id', this);
});
```

**Option 3: Backend API**
Create your own backend endpoint and POST form data to it.

## 📊 Analytics

Add Google Analytics:
```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Images Not Showing
- Check file paths are correct
- Ensure images are in `assets/images/` folder
- Check browser console for 404 errors (F12)

### Gallery Not Loading
- Verify image file names don't have special characters
- Check browser cache (Ctrl+Shift+R to hard refresh)
- Ensure JavaScript is enabled

### Mobile Menu Not Working
- Check if JavaScript is loading properly
- Open DevTools Console (F12) for errors
- Ensure `assets/js/script.js` is linked correctly

### Styling Issues
- Hard refresh browser (Ctrl+Shift+R)
- Check if styles.css is linked in head
- Ensure Tailwind CDN is loading

### Form Not Submitting
- Check console for JavaScript errors
- Verify form validation requirements are met
- Configure backend endpoint for actual email sending

## 📦 File Sizes & Performance

Typical file sizes:
- `index.html`: ~15 KB
- `gallery.html`: ~12 KB
- `styles.css`: ~25 KB
- `script.js`: ~18 KB
- Images: Variable (optimize JPEG quality to reduce)

### Performance Tips
1. **Optimize Images**: Use tools like TinyPNG to compress JPEGs
2. **Enable Gzip**: Web server should gzip assets
3. **Cache Busting**: Add version numbers to files: `script.js?v=1.0`
4. **Lazy Loading**: Images load only when visible (setup in script.js)
5. **Minify Code**: Use minification tools for production

## 🎯 Browser Support

Tested and working on:
- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android 5+)

## 📚 Additional Resources

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **MDN Web Docs**: https://developer.mozilla.org/
- **Google Fonts**: https://fonts.google.com/
- **Can I Use**: https://caniuse.com/

## 💡 Future Enhancement Ideas

- Blog section for company news
- Contact form with email integration
- Team member profiles section
- Client testimonials carousel
- Dark mode toggle
- Multi-language support
- Live chat integration
- Newsletter subscription
- Service booking system
- Certificate/Award showcase

## 📞 Support

For questions or issues:
1. Check the troubleshooting section
2. Review code comments in HTML/CSS/JS files
3. Check browser console for error messages (F12)
4. Validate HTML at https://validator.w3.org/

## 📄 License

This website template is provided as-is for Marshk. Modification and deployment are permitted.

## ✅ Checklist Before Launch

- [ ] Update all company information
- [ ] Test on mobile devices
- [ ] Test all links and navigation
- [ ] Verify all images display correctly
- [ ] Update social media links
- [ ] Configure email/contact form
- [ ] Add analytics code
- [ ] Test form submission
- [ ] Check SEO meta tags
- [ ] Optimize images for web
- [ ] Set up domain name
- [ ] Deploy to hosting
- [ ] Set up SSL certificate
- [ ] Configure email records (MX, SPF)
- [ ] Submit sitemap to search engines

---

**Created:** February 2026
**Version:** 1.0
**Updated:** [Your Date]

Enjoy your new professional website! 🚀
