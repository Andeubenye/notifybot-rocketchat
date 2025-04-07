const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('👋 Welcome to NotifyBot!');
});

app.get('/status', (req, res) => {
  res.status(200).json({
    service: 'NotifyBot',
    status: 'online',
    uptime: `${process.uptime().toFixed(2)}s`
  });
});

app.post('/send', (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Message is required' });

  console.log(`📨 Message sent: ${message}`);
  res.status(200).json({ status: 'Message sent' });
});

app.post('/broadcast', (req, res) => {
  const { recipients, message } = req.body || {};
  if (!Array.isArray(recipients) || recipients.length === 0) {
    return res.status(400).json({ error: 'Recipients array is required' });
  }
  if (!message) return res.status(400).json({ error: 'Message is required' });

  recipients.forEach(r => {
    console.log(`📢 Sent to ${r}: ${message}`);
  });

  res.status(200).json({ status: 'Broadcast complete', count: recipients.length });
});

app.listen(3000, () => {
  console.log('✅ NotifyBot running on http://localhost:3000');
});
