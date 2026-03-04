<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/464a8d15-eeeb-4520-9c9d-6bd248d7e766

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## EmailJS setup (contact form)

The contact form in `src/App.tsx` is connected to EmailJS using:

- Service ID: `service_qx0z97v`
- Template ID: `template_c3qd13s`

Add this to your `.env.local`:

`VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key`

Template variables expected by the form:

- `from_name`
- `from_email`
- `company`
- `phone`
- `service`
- `message`
- `reply_to`
- `sent_at`
