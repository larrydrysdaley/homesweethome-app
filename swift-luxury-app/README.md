# Home Sweet Home - Modern Web Application

A modern, premium web application for property rentals built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Glassmorphism effects, smooth animations, and gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **White Label Ready**: Easily configurable brand details via a single config file
- **Application Form**: Integrated rental application form with Discord webhook
- **SEO Optimized**: Built-in SEO best practices with Next.js metadata
- **Fast Performance**: Optimized for Vercel deployment
- **TypeScript**: Type-safe code for better development experience

## 📋 Prerequisites

- Node.js 18+ installed
- A Discord server (for webhook notifications)
- A GitHub account (for deployment)
- A Vercel account (free tier works great)

## 🛠️ Setup Instructions

### 1. Discord Webhook Setup

1. Go to your Discord server
2. Navigate to: **Server Settings > Integrations > Webhooks**
3. Click **"New Webhook"**
4. Name it "Rental Applications"
5. Select the channel where you want to receive applications
6. Click **"Copy Webhook URL"**

### 2. Local Development

1. Create a `.env.local` file in the root directory:
   ```bash
   NEXT_PUBLIC_DISCORD_WEBHOOK_URL=your_webhook_url_here
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### 3. Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"**
4. Import your GitHub repository
5. In the **Environment Variables** section, add:
   - Key: `NEXT_PUBLIC_DISCORD_WEBHOOK_URL`
   - Value: Your Discord webhook URL
6. Click **"Deploy"**

#### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Add environment variable:
   ```bash
   vercel env add NEXT_PUBLIC_DISCORD_WEBHOOK_URL
   ```

## 🎨 Branding & Configuration

This application is designed to be easily white-labeled. You can change the site name, description, contact details, and more in a single file.

**Configuration File:** `app/lib/siteConfig.ts`

```typescript
export const siteConfig = {
  name: "Home Sweet Home",
  shortName: "HomeSweetHome",
  description: "Modern luxury living for your perfect lifestyle.",
  contact: {
    email: "contact@homesweethome.com",
    phone: "+1 (555) 123-4567",
    address: "123 Luxury Lane, Beverly Hills, CA 90210"
  },
  colors: {
    primary: "blue-600"
  }
};
```

Simply update this file to change the branding across the entire site instantly.

## 📁 Project Structure

```
home-sweet-home-app/
├── app/
│   ├── lib/
│   │   └── siteConfig.ts    # Central branding configuration
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation bar
│   │   └── Footer.tsx       # Footer component
│   ├── application/
│   │   └── page.tsx         # Application form page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── properties/
│   │   └── page.tsx         # Properties listing
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── public/                  # Static assets
├── .env.local              # Environment variables (create this)
├── package.json            # Dependencies
└── README.md              # This file
```

## 🎨 Design Features

- **Color Scheme**: 
  - Primary Blue: #0066ff
  - Primary Orange: #ff6b35
  - Dark Background: #0a0e27
  - Card Background: #1a1f3a

- **Effects**:
  - Glassmorphism cards
  - Smooth hover animations
  - Gradient text and buttons
  - Responsive grid layouts

## 📝 Form Submission

When a user submits the rental application form, the data is sent to your Discord channel as a formatted embed message containing:

- Full Name
- Email
- Phone Number
- Current Address
- Property Address
- Monthly Rent
- Number of Occupants
- Lease Duration
- Annual Income
- Emergency Contact Information

## 🔧 Customization

### Changing Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary-blue: #0066ff;
  --primary-orange: #ff6b35;
  --dark-bg: #0a0e27;
  --card-bg: #1a1f3a;
}
```

### Adding More Pages

Create a new folder in the `app` directory with a `page.tsx` file:

```typescript
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NewPage() {
  return (
    <>
      <Navbar />
      <main>Your content here</main>
      <Footer />
    </>
  );
}
```

## 📱 Testing

After deployment, test the application form:

1. Fill out all required fields
2. Submit the form
3. Check your Discord channel for the notification
4. Verify all data is correctly formatted

## 📄 License

This project is private and proprietary.

## 🤝 Support

For support, email contact@homesweethome.com.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
