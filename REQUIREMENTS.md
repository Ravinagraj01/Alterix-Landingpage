# Alterix Website - Production Requirements

## 🚀 To Make Fully Functional

### 1. **Waitlist Form Integration** ⭐ (HIGH PRIORITY)

#### Option A: Tally.so (Recommended - Free & Easy)
```bash
# Steps:
1. Sign up at https://tally.so
2. Create a new form with these exact fields:
   - Name (Text, Required)
   - YouTube channel link (URL, Optional)
   - How many hours/week do you spend editing? (Dropdown)
     * Less than 2
     * 2–5
     * 5–10
     * 10+
   - What's your biggest editing frustration? (Paragraph)
   - Would you pay for a tool that cuts your edit time by 70%? (Dropdown)
     * Yes, definitely
     * Maybe, depends on price
     * Not sure yet
   - If yes — what would feel fair per month? (Dropdown)
     * $10
     * $20
     * $30
     * $50+
   - Email address (Email, Required)
   - Want a 1-on-1 call to share your thoughts? (Text, Optional)
3. Get your form URL (looks like: https://tally.so/r/xxxxx)
4. Replace the URL in WaitlistForm.tsx line 236
```

#### Option B: Custom Backend (Advanced)
```bash
# Required:
- Node.js/Express API endpoint
- PostgreSQL/MongoDB database
- Email service (SendGrid/Resend)
- Form validation and spam protection
```

### 2. **Social Media Links** 📱

#### Update These Files:
- `FoundersNote.tsx` - Line 82: Replace `@yourusername`
- `Footer.tsx` - Line 42: Replace `@yourusername`
- `Footer.tsx` - Line 47: Replace `hello@alterix.io`

#### Required Accounts:
- Twitter/X account for the founder
- Professional email address
- Consider: LinkedIn, Instagram, YouTube channel

### 3. **Domain & Hosting** 🌐

#### Required:
```bash
# Domain:
- Purchase alterix.io (or similar)
- Configure DNS to point to hosting

# Hosting Options:
1. Vercel (Recommended for React)
2. Netlify
3. AWS Amplify
4. DigitalOcean App Platform
```

### 4. **Analytics & Tracking** 📊

#### Google Analytics 4:
```bash
# Add to public/index.html in <head>:
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### Hotjar or Clarity (Optional):
- For user session recordings
- Heatmaps and conversion tracking

### 5. **SEO Optimization** 🔍

#### Update `public/index.html`:
```html
<title>Alterix - Your Video Editing Style, Cloned & Automated</title>
<meta name="description" content="Upload your raw footage. We study how you edit. Then we do it for you — your cuts, your pacing, your vibe. Join the waitlist for early access.">
<meta name="keywords" content="video editing, AI video editor, content creator, YouTube automation, video editing software">

<!-- Open Graph -->
<meta property="og:title" content="Alterix - Your Video Editing Style, Cloned & Automated">
<meta property="og:description" content="Upload your raw footage. We study how you edit. Then we do it for you.">
<meta property="og:image" content="https://alterix.io/og-image.png">
<meta property="og:url" content="https://alterix.io">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Alterix - Your Video Editing Style, Cloned & Automated">
<meta name="twitter:description" content="Upload your raw footage. We study how you edit. Then we do it for you.">
<meta name="twitter:image" content="https://alterix.io/twitter-card.png">
```

### 6. **Performance Optimization** ⚡

#### Build Optimization:
```bash
# Run production build:
npm run build

# Test performance:
npx lighthouse http://localhost:3000 --view
```

#### Required Images:
- `public/og-image.png` (1200x630px)
- `public/twitter-card.png` (1200x600px)
- `public/favicon.ico`
- `public/logo192.png`
- `public/logo512.png`

### 7. **Email Service** 📧

#### For Waitlist Confirmation:
```bash
# Options:
1. Resend (Recommended - Simple API)
2. SendGrid
3. AWS SES
4. Mailgun

# Required:
- Welcome email template
- "We're launching soon" updates
- Founder note personal email
```

### 8. **Security & Compliance** 🔒

#### Required:
```bash
# GDPR/Privacy:
- Privacy Policy page
- Terms of Service page
- Cookie consent banner
- Data processing agreement

# Security:
- HTTPS certificate (automatic with most hosting)
- CSP headers if needed
- Rate limiting on forms
```

### 9. **Monitoring & Alerts** 🚨

#### Recommended Tools:
```bash
# Uptime Monitoring:
- Uptime Robot (Free)
- Pingdom

# Error Tracking:
- Sentry (Free tier available)
- LogRocket

# Performance:
- Vercel Analytics (if using Vercel)
- Google PageSpeed Insights
```

### 10. **Launch Checklist** ✅

#### Pre-Launch:
- [ ] All social links updated
- [ ] Tally form created and integrated
- [ ] Domain purchased and configured
- [ ] Email service set up
- [ ] Analytics installed
- [ ] SEO metadata added
- [ ] Privacy Policy & Terms created
- [ ] Test all forms and links
- [ ] Mobile responsiveness test
- [ ] Performance audit (Lighthouse score >90)

#### Post-Launch:
- [ ] Monitor analytics daily
- [ ] Check waitlist submissions
- [ ] Respond to all emails within 24h
- [ ] A/B test headline variations
- [ ] Collect user feedback for product development

## 🎯 Quick Start (Minimum Viable)

To get the site fully working TODAY, you only need:

1. **Tally.so form** (5 minutes setup)
2. **Update social links** (2 minutes)
3. **Domain pointing** (varies)

Everything else can be added incrementally as you grow.

## 🔧 Files to Update

### 1. `src/components/WaitlistForm.tsx`
```typescript
// Line 236: Replace with your Tally URL
onClick={() => window.open('https://tally.so/r/YOUR_FORM_ID', '_blank')}
```

### 2. `src/components/FoundersNote.tsx`
```typescript
// Line 82: Update Twitter handle
href="https://twitter.com/YOUR_USERNAME"

// Line 87: Update email
href="mailto:YOUR_EMAIL@domain.com"
```

### 3. `src/components/Footer.tsx`
```typescript
// Line 42: Update Twitter
href="https://twitter.com/YOUR_USERNAME"

// Line 47: Update email
href="mailto:hello@alterix.io"
```

### 4. `public/index.html`
```html
<!-- Add all SEO meta tags and analytics -->
```

## 📈 Next Steps After Launch

1. **Collect waitlist emails** - Your most valuable asset
2. **Survey early users** - Validate product-market fit
3. **Build MVP** - Based on survey feedback
4. **Invite beta testers** - From your waitlist
5. **Launch to public** - With testimonials from beta users

---

**Priority Order:**
1. Tally Form Integration ⭐⭐⭐
2. Social Links ⭐⭐
3. Domain & Hosting ⭐⭐
4. Analytics ⭐
5. Everything else (can wait)

The website is 95% complete - just need these integrations to make it fully functional!
