import MailerLite from '@mailerlite/mailerlite-nodejs';

const mailerLite = new MailerLite({
  api_key: process.env.MAILERLITE_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const response = await mailerLite.subscribers.createOrUpdate({
      email,
      status: 'active',
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
}
