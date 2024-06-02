const responses = {
    "😀": ["सराफत से मुस्कुरा रहे हो 😀😀", "😀😀😀😀"],
    "😄": ["चूहे जैसा मुह मत बना 😆", "😄😄😄😄"],
    "😁": ["लगता है आज पहली बार ब्रश किया है 😁", "कोलगेट का प्रचार कर रहे हो क्या?😂", "ऐसे कौन हस्ता है दोनो दांत चिपका के यार😝👈"],
    "😆": ["आंख बंद करके क्यू हस रहे हो ठरकी 😆", "आंख खोल के हस न मुझे तेरी आंखों में बस जाना है।😝", "😐😐😐😐"],
    "😅": ["तेरे सर से पानी क्यू टपक रहा 😅", "लगता तेरे सर पर ऊपर से कौवा हग दिया है।😂", "😅😅😅😅"],
    "😂": ["इतनी हसी क्यू आ रही है इस हसी के पीछे क्या राज है बताओ बताओ हमसे ना सरमाओ 😂🤤", "हंसना नही आता है तो हसमुखिया देवी से जाकर मिलो😐 सीखा देगी वो🥺", "😂😂😂"],
    "🤣": ["ज्यादा मत हस, एक मुक्के मे सारे दांत तोड़ दूंगा 😂", "🤣🤣🤣"],
    "😭": ["अरे यार रोते नही पागल किया हुआ है मुझे बताओ बाबू 🥺🥺🥺", "क्या हुआ बाबू क्यूं रो रहे हो ग्रुप में बाढ़ आ जाएगी🥺", "😭😭😭"],
    "😉": ["आंख क्यूं मार रहे हो 🥺🤟", "सरेआम पब्लिक प्लेस में किसको आंख मार रहे हो बेशरम?🧐", "😉😉😉"],
    "kamina": ["तु है कमिना मैं तो बोट हूं।🥺", "तु डबल कमिना 😐🤐😑", "तु है सबसे बड़ाकमिना", "तु है कमिना मैं तो बोट हूं।😐🤐"],
    "kutta": ["तु कुतिया 😷", "कुत्ता बोले तो ग्रुप से भाग जाऊंगा🥺", "दूर हो जा कुत्ते मेरे नजरों से 😷"],
    "tharki": ["तु है ठरकी🥺", "तु है ठरकी मैं तो बोट हूं।🥴", "तु ठरकी तेरा बाप भी ठरकी बस 😒👈"],
    "call": ["यार मैं कैसे कॉल आऊं मैं तो बोट हूं।🥺👈", "मैं कॉल नही आ सकता मेरी gf कसम दी है अगर किसी पराई लड़की से कॉल पर बात किया तो कुट दूंगी।🥺👈", "रिचार्ज खतम हो गया 😒👈", "नंबर दो बेबी अभी कॉल आता हूं।"],
    "chuti": ["तु है चुतिया 😡👈", "तु है चुतिया मैं तो बोट हूं।😒👈", "अरे चुतिया चुप हो जा 😡😒👈"],
    "pagal": ["हम पागल नही बाबू हमारा दिमाग खराब है।😒😝👈", "तुम भी पागल हम भी पागल पागल सारा जमाना", "तुम हो पागल 😒👈"],
        "hate": ["आई नफरत उह 😏👈", "आई हेट यू थू 😏👈", "आई लव उह बाबू 😝😘🙈👈"],
        "nikal": ["कहा से निकलूं?🤔👈", "तु निकल 😏👈", "नही निकलना है समझा 😏👈"],
        "bhag": ["हां चलो हम दोनो भाग चलते है 😝👈", "तु भाग जा ठरकी 😏👈", "किसको लेकर भागना है?🤔"],
        "pgl": ["हम पागल नही बाबू हमारा दिमाग खराब है।😒😝👈", "तुम भी पागल हम भी पागल पागल सारा जमाना", "तुम हो पागल 😒👈"],
        "wel": ["धन्यवाद 😇🤚", "शुक्रिया 😇🤚", "आपका बहुत बहुत धन्यवाद 😇🤚", "थैंक्यू 😇🤚"],
        "😥": ["बाबू किसने मारा आपको 😥👈", "रोऊ नही मेरी जान 😥👈", "क्या हुआ बाबू 😥👈"]
    };

    module.exports.config = {
        name: "autoReply",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "SHANKAR SUMAN",
        description: "Auto-reply to specific emojis and keywords",
        commandCategory: "No command marks needed",
        usePrefix: false,
        cooldowns: 5,
    };

    module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
        var { threadID, messageID, senderID, body } = event;
        const keys = Object.keys(responses);

        // Convert the message body to lowercase for case-insensitive matching
        const lowerBody = body.toLowerCase();

        for (const key of keys) {
            // Check if the lowercase message body includes the lowercase keyword
            if (lowerBody.includes(key.toLowerCase())) {
                try {
                    const userInfo = await api.getUserInfo(senderID);
                    if (!userInfo || !userInfo[senderID] || !userInfo[senderID].name) {
                        console.error(`User info not found for senderID: ${senderID}`);
                        return;
                    }
                    const userName = userInfo[senderID].name;

                    // Randomly select a response from the appropriate array
                    const randomResponse = responses[key][Math.floor(Math.random() * responses[key].length)];

                    var msg = {
                        body: randomResponse.replace("naam", userName),
                    };
                    api.sendMessage(msg, threadID, messageID);
                    break;  // Exit the loop once a match is found
                } catch (error) {
                    console.error(`Failed to fetch user info for senderID: ${senderID}`, error);
                }
            }
        }
    }

    module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
