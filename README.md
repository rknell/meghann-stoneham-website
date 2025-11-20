# Meghann Stoneham - Genetic Counsellor Website

A modern, responsive single-page website for Meghann Stoneham, a Genetic Counsellor and Registered Pharmacist specialising in functional conditions and root cause treatment.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works beautifully on all devices (mobile, tablet, desktop)
- **Smooth Animations**: Scroll-based animations and transitions for an engaging user experience
- **SEO Optimized**: Comprehensive meta tags, schema.org markup, and semantic HTML for better search engine visibility
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance**: Lightweight vanilla JavaScript with no external dependencies
- **Modern UI**: Clean white and blue color scheme with professional aesthetics

## 📋 Sections

1. **Hero Banner**: Eye-catching full-screen hero with compelling headline and call-to-action
2. **About**: Comprehensive background, education, and personal journey
3. **Services**: Grid layout showcasing conditions treated with focus on functional medicine
4. **Booking**: Clear call-to-action with contact information and pricing
5. **Footer**: Professional footer with credentials and contact details

## 🚀 Quick Start

### Option 1: Open Directly in Browser

1. Simply open `index.html` in any modern web browser
2. That's it! No build process or dependencies required

### Option 2: Using a Local Server (Recommended)

For the best development experience, use a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
# Install http-server globally (one time)
npm install -g http-server

# Run server
http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open your browser to: `http://localhost:8000`

## 📁 File Structure

```
meghann-stoneham-website/
│
├── index.html          # Main HTML file with semantic structure
├── styles.css          # All CSS styling and responsive design
├── script.js           # JavaScript for interactions and animations
└── README.md           # This file
```

## 🎨 Customization Guide

### Adding Real Images

Replace the placeholder images by updating the HTML:

1. **Profile Photo** (About section):
   ```html
   <div class="about-image slide-in-left">
       <img src="path/to/your-photo.jpg" alt="Meghann Stoneham">
   </div>
   ```

2. **Hero Background**:
   Add to the `.hero` class in `styles.css`:
   ```css
   .hero {
       background-image: url('path/to/hero-image.jpg');
       background-size: cover;
       background-position: center;
   }
   ```

### Changing Colors

All colors are defined as CSS variables in `styles.css`. Update these at the top of the file:

```css
:root {
    --primary-blue: #2563eb;      /* Main blue color */
    --navy-blue: #1e3a8a;         /* Dark blue */
    --secondary-blue: #60a5fa;    /* Light blue */
    /* ... more color variables */
}
```

### Updating Content

All content is in `index.html`. Simply search for the section you want to update and modify the text directly.

### Adding Analytics

To track visitor behavior, add your analytics code before the closing `</head>` tag in `index.html`:

**Google Analytics:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌐 Deployment

### Option 1: Netlify (Recommended - Free)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the project folder
3. Your site is live! Netlify provides free HTTPS and custom domains

### Option 2: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 3: Traditional Web Hosting

Upload all files via FTP to your web hosting provider's public_html or www directory.

**Required files for deployment:**
- index.html
- styles.css
- script.js
- Any images you've added

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels for screen readers
- Keyboard navigation support
- Focus indicators for interactive elements
- Respects user's reduced motion preferences
- High contrast mode support

## 🔍 SEO Features

- Comprehensive meta tags
- Open Graph tags for social media sharing
- Schema.org structured data for local business
- Semantic HTML structure
- Optimized page title and descriptions
- Keywords targeting functional conditions and location

## 📞 Contact Information

**Meghann Stoneham**
- Phone: 0452 319 179
- Location: Ormeau, Queensland - Northern Gold Coast
- Rate: $250/hour

## 🔧 Technical Details

- **Technology Stack**: HTML5, CSS3, Vanilla JavaScript
- **CSS Methodology**: Custom properties (CSS variables), mobile-first responsive design
- **JavaScript**: ES6+, Intersection Observer API for scroll animations
- **Dependencies**: None - completely self-contained
- **Performance**: Optimized with throttled scroll events and efficient animations

## 📝 Future Enhancements (Optional)

Consider adding these features in the future:

1. **Online Booking System**: Integrate with Calendly, Acuity, or similar
2. **Testimonials Section**: Add client reviews and success stories
3. **Blog**: Share insights about functional health and genomics
4. **FAQ Section**: Answer common questions about services
5. **Contact Form**: Alternative to phone booking
6. **Live Chat**: Real-time support for visitors
7. **Newsletter Signup**: Build email list for health tips

## 🐛 Troubleshooting

**Animations not working:**
- Ensure JavaScript is enabled in your browser
- Check browser console (F12) for any errors

**Mobile menu not opening:**
- Clear browser cache
- Ensure JavaScript file is loaded properly

**Styling issues:**
- Verify all three files (HTML, CSS, JS) are in the same directory
- Check file paths are correct

## 📄 License

© 2025 Meghann Stoneham. All rights reserved.

## 💡 Support

For technical support or website updates, contact your web developer or refer to this documentation.

---

**Built with care to help people find the root cause and treat from within. 💙**

