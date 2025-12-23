# Swift Luxury Homes - Setup Instructions

## Discord Webhook Setup

1. Go to your Discord server
2. Navigate to: Server Settings > Integrations > Webhooks
3. Click "New Webhook"
4. Name it "Swift Luxury Homes Applications"
5. Select the channel where you want to receive applications
6. Copy the Webhook URL
7. Create a `.env.local` file in the root directory with:
   ```
   NEXT_PUBLIC_DISCORD_WEBHOOK_URL=your_webhook_url_here
   ```

## Running Locally

```bash
npm run dev
```

## Deploying to Vercel

1. Push this code to your GitHub repository
2. Go to vercel.com and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Add the environment variable `NEXT_PUBLIC_DISCORD_WEBHOOK_URL` in Vercel project settings
6. Deploy!

## Features

- Modern, responsive design
- Rental application form with Discord webhook integration
- Optimized for Vercel deployment
- TypeScript + Next.js 15 + Tailwind CSS
