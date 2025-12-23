# 🚀 Quick Start Guide - Swift Luxury Homes

## ⚡ 3-Step Deployment

### 1️⃣ Discord Webhook (2 minutes)
```
1. Open Discord → Server Settings → Integrations → Webhooks
2. Click "New Webhook"
3. Name: "Swift Luxury Applications"
4. Copy Webhook URL
```

### 2️⃣ Push to GitHub (1 minute)
```bash
cd swift-luxury-app
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### 3️⃣ Deploy to Vercel (2 minutes)
```
1. Go to vercel.com
2. Import your GitHub repo
3. Add environment variable:
   NEXT_PUBLIC_DISCORD_WEBHOOK_URL = [your webhook URL]
4. Click Deploy
```

## ✅ Done! Your site is live!

---

## 🧪 Test Locally First

```bash
# Create .env.local file with:
NEXT_PUBLIC_DISCORD_WEBHOOK_URL=your_webhook_url_here

# Run development server:
npm run dev

# Open: http://localhost:3000
```

---

## 📋 What You'll Receive in Discord

When someone submits an application, you'll get a beautiful Discord message with:

```
🏠 New Rental Application Submitted

👤 Full Name: John Doe
📧 Email: john@example.com
📱 Phone Number: 555-1234
🏠 Current Address: 123 Main St
📍 Property Address: 456 Beach Rd
💰 Monthly Rent: $5,000
👥 Occupants: 2
📅 Lease Duration: 12 months
💵 Annual Income: $120,000
🚨 Emergency Contact: Jane Doe
📞 Emergency Phone: 555-5678
```

---

## 🎨 Customization Tips

**Update Colors** → Edit `app/globals.css`:
```css
:root {
  --primary-blue: #0066ff;
  --primary-orange: #ff6b35;
}
```

**Update Content** → Edit these files:
- Homepage: `app/page.tsx`
- About: `app/about/page.tsx`
- Properties: `app/properties/page.tsx`

**Add Images** → Place in `public/` folder

---

## 💰 Cost Breakdown

| Service | Cost |
|---------|------|
| Vercel Hosting | **FREE** |
| Discord Webhooks | **FREE** |
| Domain (optional) | ~$12/year |
| **Total** | **$0/month** |

---

## 🆘 Troubleshooting

**Form not submitting?**
- Check webhook URL in environment variables
- Verify Discord webhook is active
- Check browser console for errors

**Build failing?**
- Run `npm run build` locally first
- Check for TypeScript errors
- Verify all dependencies installed

**Styling broken?**
- Clear browser cache
- Check Tailwind CSS is configured
- Rebuild: `npm run build`

---

## 📞 Support

**Email**: info@swiftluxuryhomes.com  
**Phone**: +1 808 437 5965  
**Location**: `c:\Users\Admin\swiftlxyhms\swift-luxury-app\`

---

**Ready to go live? Follow the 3 steps above! 🎉**
