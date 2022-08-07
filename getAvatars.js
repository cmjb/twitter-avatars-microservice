const Puppeteer = require('puppeteer');

module.exports = class avatarService {
    getAvatar = async (twitterUsername) => {
        const navigator = await Puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
        const page = await navigator.newPage();
        await page.goto(`https://twitter.com/${twitterUsername}`);
        try {
            await page.waitForSelector('a[href$="/photo"] img[src]');
            const url = await page.evaluate(()=>document.querySelector('a[href$="/photo"] img').src);
            await navigator.close();
            return {
                username: twitterUsername,
                profile_image_url: url
            }
        } catch(ex) {
            await navigator.close();
        }
        
    }
}







