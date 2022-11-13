let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    pepe = 'https://telegra.ph/file/a48d1ab6c0dbeeda84e7d.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "◈ Made by NdaDEV",
        "description": `
┌「 *Sewa bot* 」
│     
├ Sewa ♡
├ Rp. 5.000     | 1 Week
├ Rp. 10.000    | 1 Month
│
├ Premium ☆
├ Rp. 5,000     | 1 Week
├ Rp. 10,000    | 1 Month
│
│
├ 👥: bang kok mahal banget?
├ 👤: Tawar menawar boleh
│
│
├ tertarik? hubungi: 
├ @6283816797646   (Ananda DEV)
└────
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "001"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "001",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6283816797646@s.whatsapp.net"
        },
        "footerText": "https://wa.me/c/6283816797646\n\nowner number : wa.me/6283816797646"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot', 'premium']
handler.tags = ['main']
handler.command = /^(sewabot|premium)$/i

module.exports = handler
