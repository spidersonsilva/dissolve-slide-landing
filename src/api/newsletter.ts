import MailerLite from '@mailerlite/mailerlite-nodejs';

// Initialize MailerLite client
const mailerLite = new MailerLite({
  api_key: process.env.MAILERLITE_API_KEY
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Add subscriber to MailerLite
    const response = await mailerLite.subscribers.createOrUpdate({
      email,
      status: 'active',
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return new Response(JSON.stringify({ error: 'Failed to subscribe' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 