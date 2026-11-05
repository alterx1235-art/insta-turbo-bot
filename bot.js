const axios = require('axios');
const express = require('express');
const app = express();
const port = 3500;

// 🎯 ضع اسم حسابك المستهدف هنا بين القوسين مكان كلمة اسم_حسابك
const TARGET_ACCOUNT = "abdo.oflline"; 

const freePanels = [
    `https://freefollowersapi-example.com{TARGET_ACCOUNT}&type=followers`,
    `https://turkishpanel-example.net{TARGET_ACCOUNT}&count=50`
];

let isBotRunning = false;

async function startAutoTurbo() {
    if (!isBotRunning) return;
    console.log(`🚀 بدأت دورة الضخ التلقائي لحساب: @${TARGET_ACCOUNT}`);
    for (const panelUrl of freePanels) {
        try {
            const response = await axios.get(panelUrl);
            console.log(`✅ استجاب الخادم وتم إرسال دفعة متابعين بنجاح.`);
        } catch (error) {
            console.log(`⚠️ الخادم الحالي ممتلئ، سيتم الانتقال للرابط التالي.`);
        }
    }
    const nextInterval = Math.floor(Math.random() * (3600000 - 1800000) + 1800000); 
    console.log(`😴 انتظار لـ ${nextInterval / 60000} دقيقة...`);
    setTimeout(startAutoTurbo, nextInterval);
}

app.get('/run', (req, res) => {
    if (isBotRunning) return res.send("البوت قيد التشغيل بالفعل!");
    isBotRunning = true;
    startAutoTurbo();
    res.send("⚡ تم تفعيل التيربو التلقائي بنجاح! يمكنك إغلاق الصفحة الآن.");
});

app.get('/stop', (req, res) => {
    isBotRunning = false;
    res.send("🛑 تم إيقاف البوت.");
});

app.listen(port, () => {
    console.log(`🌐 يعمل على منفذ: ${port}`);
});
