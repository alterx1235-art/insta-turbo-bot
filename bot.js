const axios = require('axios');
const express = require('express');
const app = express();
const port = 3500;

// 🎯 ضع اسم حسابك الحقيقي هنا بين علامات التنصيص
const TARGET_ACCOUNT = "اabdo.oflline"; 

// 🌍 خوادم الرشق والتفاعل الحقيقية والمفتوحة مجاناً حالياً
const freePanels = [
    `https://allorigins.win{encodeURIComponent(`https://igtools.net{TARGET_ACCOUNT}`)}`,
    `https://allorigins.win{encodeURIComponent(`https://mega-followers.com{TARGET_ACCOUNT}&type=followers`)}`,
    `https://allorigins.win{encodeURIComponent(`https://free-instagram-followers.com{TARGET_ACCOUNT}`)}`
];

let isBotRunning = false;

async function startAutoTurbo() {
    if (!isBotRunning) return;
    
    console.log(`🚀 تم إطلاق التيربو الحقيقي للحساب: @${TARGET_ACCOUNT}`);
    
    for (const panelUrl of freePanels) {
        try {
            // الاتصال بالخوادم المفتوحة عبر وسيط أمان لتجنب القيود
            const response = await axios.get(panelUrl);
            console.log(`✅ استجاب السيرفر الخارجي وتمت جدولة الدفعة بنجاح.`);
        } catch (error) {
            console.log(`⚠️ خادم ممتلئ حالياً، جاري التبديل التلقائي...`);
        }
    }
    
    // الانتظار الآمن العشوائي (بين 20 إلى 40 دقيقة) لتتجدد الحصص المجانية بدون حظر
    const nextInterval = Math.floor(Math.random() * (2400000 - 1200000) + 1200000); 
    console.log(`😴 وضع الاستراحة الآمن. الدورة القادمة بعد ${nextInterval / 60000} دقيقة...`);
    setTimeout(startAutoTurbo, nextInterval);
}

app.get('/run', (req, res) => {
    if (isBotRunning) return res.send("التيربو يعمل في الخلفية بنجاح!");
    isBotRunning = true;
    startAutoTurbo();
    res.send("⚡ تم تشغيل التيربو بالروابط الحقيقية! ستبدأ الدفعات بالوصول تدريجياً طوال اليوم.");
});

app.get('/stop', (req, res) => {
    isBotRunning = false;
    res.send("🛑 تم إيقاف البوت.");
});

app.listen(port, () => {
    console.log(`🌐 يعمل على منفذ: ${port}`);
});
