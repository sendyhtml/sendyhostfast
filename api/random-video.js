module.exports = {
  name: "Random Video",
  desc: "video random",
  category: "Random",
  path: "/random/randomvid",
  async run(req, res) {

    const buffer = await getBuffer(`https://api.fikmydomainsz.xyz/random/randomvid`);
    res.writeHead(200, {
      'Content-Type': 'video/gif',
      'Content-Length': buffer.length,
    });
    res.end(buffer);
  }
}
