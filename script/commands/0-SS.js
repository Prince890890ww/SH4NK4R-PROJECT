module.exports.config = {
    name: "ss",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Who's Deku",
    description: "AI powered by Blackbox",
  usePrefix: false,
    commandCategory: "ai",
    usages: "[ask]",
    cooldowns: 0
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
    mid = messageID;
    const q = encodeURIComponent(args.join(" "));
    if (!q) return api.sendMessage("Please Provide your questions\nexample:\nai3 what is solar system?", tid, mid);
    try {
        api.setMessageReaction("🔍", mid, (err) => {}, true);

api.sendMessage("🔍 Searching for the answer please wait...", tid, mid);
        const url = 'https://useblackbox.io/chat-request-v4';

  const data = {
    textInput: q,
    allMessages: [{ user: q }],
    stream: '',
    clickedContinue: false,
  };

const res = await axios.post(url, data);

    const m = res.data.response[0][0];
return api.sendMessage(m, tid, mid)
   } catch(e){
  return api.sendMessage(e.message, tid, mid)
    }
};
