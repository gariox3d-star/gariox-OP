let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.quotes)}”`, m)
}
handler.help = ['quotes']
handler.tags = ['quotes']
handler.command = /^(quotes)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.quotes = [
    "समय और जरुरत बलदते ही सब के चेहरे बेनकाब हो जाते है पता नहीं या तो हम में कुछ कमी आ जाती है या वो Acting अच्छी करने लगते है", 
    "खुदा ने बहुत सी अच्छी चीज बनाई है उस में एक हमारा दिमाग भी है बस उसे Use करने के लिए बता देता तो हम भी करोड़पति बन जाते.", 
    "ज़िंदगी और Swimming में एक चीज Common है तैर गए तो पार नहीं तो बीच मझदार.",
    "दर्द तब होती है, जब खुद को ठोकर लगती वरना दूसरों के तो सिर्फ लहू ही नजर आते दर्द नहीं.",
    "बातें में भी आम ही करता हूँ बस समझने वाले इसे खास बना देते है.",
    "कोई आपको छोड़ के चला गया तो क्या हुआ I अब जो वो मिले उसकी दुनियां ठहर जानी चाहिए.",
    "कभी कभी हम अनजाने में वक्त पर पावं रख देते है इसीलिए ज़िंदगी मुहं के बल गिर जाती है",
    "लोग कहते है ज़िंदगी मिली है अपने हिसाब से जीने के लिए, लेकिन वही लोग सुबह होते ही किसी और के हिसाब से जीने चले जाते है.",
    "उन्होंने हमें पढ़ के इस तरह रख दिया जैसे लोग पुराने अखबार को रख देते है.",
    "जो हाशिल नहीं होती है बस वही याद रह जाती है बाकी देती तो बहुत कुछ है ज़िंदगी.",
    "एक दिन खुद की तलाशी ले ली ,जो भी मिली वो अपनी थी लेकिन अपनी नहीं लगी.",
    "मैंने हिसाब में रहने वाले लोगों को बेहिसाब होते देखा है I मैंने लोगों को बदलते नहीं बे-नकाब होते देखा है.",
    "हालातों ने जो Chapter सिखाया है उसके एक एक शब्द याद रहते है .",
    "आज कल लोग Call करना भूल जाते है लेकिन हिसाब लगाना नहीं भूलते.",
	"Successful बनाना है तो Alert रहिये दुनिया आपको Smart बना देगी.",
	"हालातों ने जो Chapter सिखाया है उसके एक एक शब्द याद रहते है.",
	"उन्होंने हमें पढ़ के इस तरह रख दिया जैसे लोग पुराने अखबार को रख देते है.",
	"कोई आपको छोड़ के चला गया तो क्या हुआ | अब जो वो मिले उसकी दुनियां ठहर जानी चाहिए.",
	"ज़िन्दगी के हाथ नहीं होते.. लेकिन कभी कभी वो ऐसा थप्पड़ मारती हैं जो पूरी उम्र याद रहता हैं.....",
	"दुनिया भले कामचोर कहती रहे उसे,,, लेकिन वो उतना ही अपने काम मे सफल रहता है☺.",
	"कुछ झूठे लोगों का ये परिचय असली है, चेहरे तो नकली है पर अभिनय असली है….",
	"हमें तो सुख मे साथी चाहिये…… दुख मे तो हमारी…… ”‎माँ‬”अकेली ही काफी हैं…...",
	"हम दुनियां की चकाचौंध में खोए हुए हैं, और वक़्त चुप चाप हमारी कब्र खोद रहा है ।।.",
	"कमजोर व्यक्ति से दुश्मनी सबसे ज़्यादा ख़तरनाक होती हैं.. क्यूँकि वो उस समय वार करता हैं जब हम कल्पना भी नहीं सकते..!!🙏.",
	"किसी की ग़रीबी देखकर रिश्ता मत तोड़ना क्यूँकि... जितना मान सम्मान ग़रीबों के घर पर मिलता हैं, उतना अमीरों के घर पर नहीं....",
	"खुशी से संतुष्टि मिलती है और संतुष्टि से खुशी मिलती है परन्तु फर्क बहुत बड़ा है खुशी थोड़े समय के लिए संतुष्टि देती है, और संतुष्टि हमेशा के लिए खुशी देती है..",
	"शब्द ही जीवन को अर्थ दे जाते है, और,  शब्द ही जीवन में अनर्थ कर जाते है....",
	"आज इंसान उम्मीदों से बंधा एक जिद्दी परिंदा है, जो घायल भी उम्मीदों से है और जिंदा भी उम्मीदों पर है।.",
	"दोस्तों Life में किसी चीज़ का इंतज़ार मत करो क्योंकि जितना तुम सोचते हो जिंदगी उससे कई ज्यादा तेजी से निकल रही है।",
	"हमें किसी भी ख़ास समय के लिए इन्तजार नहीं करना चाहिए बल्कि अपने हर समय को ख़ास बनाने की पूरी तरह से कोशिश करनी चाहिए।...",
	"कुछ उलझनों के हल वक्त पे छोड़ देने चाहिए, बेशक जवाब देर से मिलेंगे लेकिन बेहतरीन होंगे।.",
	"पानी को कितना भी गर्म कर लें पर वह थोड़ी देर बाद अपने मूल स्वभाव में आकर शीतल हो जाता हैं। इसी प्रकार हम कितने भी क्रोध में, भय में, अशांति में रह लें, थोड़ी देर बाद बोध में, निर्भयता में और प्रसन्नता में हमें आना ही होगा क्योंकि यही हमारा मूल स्वभाव है",
	"ये किरदार मेरा ही है कि हर चाहत मैं पा न सका माँगे से भी न मिले तो रब बदले नहीं जाते.",
	"जिस दिन हम ये समझ जायेंगे कि सामने वाला गलत नहीं है सिर्फ उसकी सोच हमसे अलग है उस दिन जीवन से दुःख समाप्त हो जायेंगे “बड़प्पन” वह गुण है जो पद से नहीं “संस्कारों” से प्राप्त होता है।",
	"जिंदगी की मुश्किलों को , अपनों के बीच रख दो... या तो अपने रहेंगे, या फिर मुश्किलें.....",
	"समझ ज्ञान से गहरी होती है बहुत से लोग आपको जानते होंगें परन्तु कुछ ही लोग आपको समझते होंगे.",
	"अपनों के लिए. चिंता हृदय में होती है. शब्दों में नहीं! और अपनों के लिए. गुस्सा शब्दों में होता है हृदय में नहीं!.",
	"ख़ुद को भी कभी महसूस कर लिया करें.! कुछ रौनकें ख़ुद से भी होती हैं! इन्सान की परेशानियों की सिर्फ *दो ही वजह है, वह तक़दीर से ज्यादा चाहता है और वक्त से पहले चाहता है!.",
    "कुछ ऐसे भी है जो इशारों से दूसरों, के विचारों को दबा देते है?",
	"पैर को लगने वाली चोट संभल कर चलना सिखाती है और….. मन को लगने वाली चोट समझदारी से जीना सिखाती है।",
	"आज तुझ पर हंस रहे हैं जो, वही लोग कल को तेरा गुणगान करेंगे ... कर के दिखा दे कोई कमाल, तो तुझ पर सब अभिमान करेंगे ....",
	"तेरे खिलाफ़ क्या तूफ़ान, क्या आँधी और क्या सूनामी करेंगे … आज बाधा बनके जो खड़े हैं, कल तुझे ये सलामी करेंगे …",
    "आजकल सब यही कहते रहते है वक्त नहीं मिलता, मझे समझ नहीं आता की busy वक्त हो गया है या आदमी .",
    "चलने की कोशिश कर रहा हूँ, ज़िंदगी जिस रस्ते पर ले जाना चाहती है.",
    "बाद में बस यादें आती है वक्त नहीं, इसलिए जी लो हर एक लम्हा.",
    "मरने नहीं देती ज़िंदगी, जब तक जीना ना सीखा देती .",
    "ज़िंदगी देती बहुत कुछ है सबको लेकिन याद उसी को रखते है जो हासिल ना हो पाती है.",
    "ब कुछ भी तय करना हमारी हाथों में नहीं I तो मंजिल को भी रास्ता तय करने दो.",
    "खुद को हराना किसी और को हारने से ज्यादा अच्छा है.",
    "गलती करने वाला गलत नहीं है, कुछ नहीं करने वाला गलत है ."]