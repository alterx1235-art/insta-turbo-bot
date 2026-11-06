const axios = require('axios');
const express = require('express');
const app = express();
const port = 3500;

// 🎯 ضع اسم حسابك الحقيقي هنا بين علامات التنصيص
const TARGET_ACCOUNT = "abdo.oflline"; 

// 🌍 خوادم الرشق والتفاعل الحقيقية
const freePanels = [
    "https://allorigins.win" + encodeURIComponent("https://igtools.net" + TARGET_ACCOUNT),
    "https://allorigins.win" + encodeURIComponent("https://mega-followers.com" + TARGET_ACCOUNT + "&type=followers"),
    "https://allorigins.win" + encodeURIComponent("https://free-instagram-followers.com" + TARGET_ACCOUNT)
];

let isBotRunning = false;

async function startAutoTurbo() {
    if (!isBotRunning) return;
    
    console.log("🚀 تم إطلاق التيربو للحساب: @" + TARGET_ACCOUNT);
    
    for (const panelUrl of freePanels) {
        try {
            const response = await axios.get(panelUrl);
            console.log("✅ استجاب السيرفر الخارجي بنجاح.");
        } catch (error) {
            console.log("⚠️ خادم ممتلئ حالياً، جاري التبديل...");
        }
    }
    
    const nextInterval = Math.floor(Math.random() * (2400000 - 1200000) + 1200000); 
    console.log("⏳ الدورة القادمة بعد " + (nextInterval / 60000) + " دقيقة...");
    setTimeout(startAutoTurbo, nextInterval);
}

app.get('/run', (req, res) => {
    if (isBotRunning) return res.send("التيربو يعمل في الخلفية بنجاح!");
    isBotRunning = true;
    startAutoTurbo();
    res.send("⚡ تم تشغيل التيربو! ستبدأ الدفعات بالوصول تدريجياً طوال اليوم بأمان.");
});

app.get('/stop', (req, res) => {
    isBotRunning = false;
    res.send("🛑 تم إيقاف البوت.");
});

app.listen(port, () => {
    console.log("🌐 يعمل على منفذ: " + port);
});
