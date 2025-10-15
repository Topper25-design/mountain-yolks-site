# Formspree Setup Guide for Mountain Yolks Contact Form

This guide will help you set up Formspree for the contact form on your Mountain Yolks website.

## What is Formspree?

Formspree is a form backend service that allows you to receive form submissions via email without needing a server. It's perfect for static sites and Next.js applications.

**Free Plan Includes:**
- 50 submissions per month
- Email notifications
- Spam filtering
- No credit card required

## Setup Instructions

### Step 1: Create a Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Click **"Sign Up"** (or use Google/GitHub to sign in)
3. Verify your email address

### Step 2: Create a New Form

1. Once logged in, click **"+ New Form"**
2. Give your form a name (e.g., "Mountain Yolks Contact Form")
3. Click **"Create Form"**
4. You'll be redirected to your form's dashboard

### Step 3: Get Your Form ID

On your form's dashboard, you'll see an endpoint URL like:
```
https://formspree.io/f/xvoeabcd
```

The part after `/f/` is your **Form ID** (e.g., `xvoeabcd`)

### Step 4: Configure Your Environment Variable

1. In your project root, create a file named `.env.local` (if it doesn't exist)
2. Add your Form ID:

```env
NEXT_PUBLIC_FORMSPREE_FORM_ID=xvoeabcd
```

Replace `xvoeabcd` with your actual Form ID.

**Important:** 
- `.env.local` is already in `.gitignore` and won't be committed to GitHub
- Use `.env.local.example` as a reference

### Step 5: Update the Contact Form (Alternative Method)

If you prefer to hardcode the endpoint instead of using environment variables:

1. Open `app/contact/page.tsx`
2. Find this line:
```typescript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```
3. Replace `YOUR_FORM_ID` with your actual Form ID:
```typescript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvoeabcd';
```

### Step 6: Test Your Form

1. Start your development server:
```bash
npm run dev
```

2. Navigate to the Contact page: `http://localhost:3000/contact`

3. Fill out and submit the test form

4. Check your Formspree dashboard - you should see the submission!

5. Check your email - you should receive a notification

## Formspree Dashboard Features

### View Submissions
- All form submissions are stored in your Formspree dashboard
- You can export them as CSV
- Search and filter submissions

### Email Notifications
- By default, submissions are sent to your account email
- You can add multiple email recipients
- Customize email templates

### Spam Protection
- Formspree includes reCAPTCHA integration
- Honeypot field protection (already included in our form)
- Manual spam filtering tools

### Custom Configuration (Optional)

In your Formspree form settings, you can customize:

1. **Email Template**: Customize how submission emails look
2. **Reply-To**: Set the submitter's email as reply-to
3. **Auto-Response**: Send automatic replies to form submitters
4. **Webhooks**: Integrate with other services
5. **File Uploads**: Enable file attachments (requires paid plan)

## Advanced: Using Environment Variables

We've set up the contact form to support environment variables. Here's how it works:

### Development (.env.local)
```env
NEXT_PUBLIC_FORMSPREE_FORM_ID=xvoeabcd
```

### Production (Vercel/Netlify)
Add the environment variable in your hosting platform's settings:
- **Variable Name**: `NEXT_PUBLIC_FORMSPREE_FORM_ID`
- **Value**: Your Form ID (e.g., `xvoeabcd`)

## Upgrading Formspree

If you need more than 50 submissions per month:

- **Gold Plan** ($10/month): 1,000 submissions
- **Platinum Plan** ($40/month): 10,000 submissions
- **Custom Enterprise** plans available

## Alternative Services

If you prefer a different service, here are some alternatives:

1. **EmailJS** - Free tier: 200 emails/month
2. **Netlify Forms** - Free tier: 100 submissions/month (Netlify hosting required)
3. **Getform** - Free tier: 50 submissions/month
4. **Web3Forms** - Free, unlimited submissions

The contact form can be easily adapted to any of these services by changing the `FORMSPREE_ENDPOINT` and adjusting the submission logic.

## Troubleshooting

### Form not submitting?
1. Check browser console for errors
2. Verify your Form ID is correct
3. Check that environment variable is set (restart dev server after adding .env.local)
4. Ensure you're connected to the internet

### Not receiving emails?
1. Check your spam folder
2. Verify your email in Formspree settings
3. Check Formspree dashboard to see if submission was received
4. Add additional email addresses in form settings

### Getting CORS errors?
- Formspree should handle CORS automatically
- If issues persist, check Formspree form settings and allowed domains

## Support

- **Formspree Documentation**: [https://help.formspree.io/](https://help.formspree.io/)
- **Formspree Support**: [support@formspree.io](mailto:support@formspree.io)

## Features of Our Contact Form

✅ **Beautiful UI**: Branded with Mountain Yolks colors  
✅ **Loading State**: Shows egg spinner while submitting  
✅ **Success Message**: Animated confirmation with auto-hide  
✅ **Error Handling**: Clear error messages  
✅ **Form Validation**: Required fields and proper input types  
✅ **Responsive**: Works perfectly on all devices  
✅ **Accessible**: Proper labels and ARIA attributes  
✅ **Form Reset**: Automatically clears after successful submission  

Enjoy your fully functional contact form! 🥚✨

