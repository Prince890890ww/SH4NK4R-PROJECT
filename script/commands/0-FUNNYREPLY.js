const responses = {
  "kamina": ["naam तु है कमिना मैं तो बोट हूं।🥺", "naam तु डबल कमिना 😐🤐😑", "naam तु है सबसे बड़ाकमिना", "naam तु है कमिना मैं तो बोट हूं।😐🤐"],
  "kutta": ["naam तु कुतिया 😷", "naam कुत्ता बोले तो ग्रुप से भाग जाऊंगा🥺", "naam दूर हो जा कुत्ते मेरे नजरों से 😷"],
  "tharki": ["naam तु है ठरकी🥺", "naam तु है ठरकी मैं तो बोट हूं।🥴", "naam तु ठरकी तेरा बाप भी ठरकी बस 😒👈"],
  "call": ["naam यार मैं कैसे कॉल आऊं मैं तो बोट हूं।🥺👈", "naam मैं कॉल नही आ सकता मेरी gf कसम दी है अगर किसी पराई लड़की से कॉल पर बात किया तो कुट दूंगी।🥺👈", "naam रिचार्ज खतम हो गया 😒👈", "naam नंबर दो बेबी अभी कॉल आता हूं।"],
  "chuti": ["naam तु है चुतिया 😡👈", "तु है चुतिया मैं तो बोट हूं।😒👈", "naam अरे चुतिया चुप हो जा 😡😒👈"],
  "pagal": ["naam हम पागल नही बाबू हमारा दिमाग खराब है।😒😝👈", "naam तुम भी पागल हम भी पागल पागल सारा जमाना", "naam तुम हो पागल 😒👈"],
  "hate": ["naam आई नफरत उह 😏👈", "naam आई हेट यू थू 😏👈", "naam आई लव उह बाबू 😝😘🙈👈"],
  "nikal": ["naam कहा से निकलूं?🤔👈", "naam तु निकल 😏👈", "naam नही निकलना है समझा 😏👈"],
  "bhag": ["naam हां चलो हम दोनो भाग चलते है 😝👈", "naam तु भाग जा ठरकी 😏👈", "naam किसको लेकर भागना है?🤔"],
  "pgl": ["naam हम पागल नही बाबू हमारा दिमाग खराब है।😒😝👈", "naam तुम भी पागल हम भी पागल पागल सारा जमाना", "naam तुम हो पागल 😒👈"],
  "wel": ["naam धन्यवाद 😇🤚", "naam शुक्रिया 😇🤚", "naam आपका बहुत बहुत धन्यवाद 😇🤚", "थैंक्यू 😇🤚 naam"],
   "pagal": ["naam हम पागल नही बाबू हमारा दिमाग खराब है।😒😝👈", "naam तुम भी पागल हम भी पागल पागल सारा जमाना", "naam तुम हो पागल 😒👈"]
};

module.exports.config = {
  name: "autoReply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN",
  description: "Auto-reply to specific emojis",
  commandCategory: "No command marks needed",
  usePrefix: false,
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
  var { threadID, messageID, senderID, body } = event;
  const emojis = Object.keys(responses);

  // Convert the message body to lowercase
  const lowercaseBody = body.toLowerCase();

  for (const emoji of emojis) {
      if (lowercaseBody.includes(emoji)) {
          const userInfo = await api.getUserInfo(senderID);
          const userName = userInfo[senderID].name;

          // Randomly select a response from the appropriate array
          const randomResponse = responses[emoji][Math.floor(Math.random() * responses[emoji].length)];

          var msg = {
              body: randomResponse.replace("naam", userName),
          };
          api.sendMessage(msg, threadID, messageID);
          break;  // Exit the loop once a match is found
      }
  }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
