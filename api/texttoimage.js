module.exports = {
  name: "AI Image",
  desc: "Image Ai generator",
  category: "Imagecreator",
  path: "/imagecreator/aiimage?apikey=&text=",
  async run(req, res) {
    const { apikey, text } = req.query;
    if (!global.apikey.includes(apikey)) return res.json({ status: false, error: 'Apikey invalid' });
    if (!text) return res.json({ status: false, error: 'Missing text' });

    const buffer = await getBuffer(`https://image.pollinations.ai/prompt/${encodeURIComponent(text)}`);
    res.writeHead(200, {
      'Content-Type': 'image/image',
      'Content-Length': buffer.length,
    });
    res.end(buffer);
  }
}
