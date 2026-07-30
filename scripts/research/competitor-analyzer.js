const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const COMPETITORS = [
  "https://chaseagents.com/",
  "https://tenaxity.ai/",
  "https://jadasquad.com/",
  "https://vertechdigital.com/"
];

async function run() {
  console.log("Starting Competitor Analyzer (SMB AI/MVP Focus)...");
  const browser = await puppeteer.launch({ 
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  
  const report = {};

  for (const url of COMPETITORS) {
    console.log(`Analyzing competitor: ${url}`);
    const page = await browser.newPage();
    
    try {
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      
      const data = await page.evaluate(() => {
        const title = document.title;
        const metaDesc = document.querySelector('meta[name="description"]')?.content || "";
        const h1 = document.querySelector('h1')?.innerText || "";
        const textContent = document.body.innerText.substring(0, 3000); 
        return { title, metaDesc, h1, textContentLength: textContent.length };
      });
      
      report[url] = data;
    } catch (e) {
      console.error(`Error analyzing ${url}: ${e.message}`);
      report[url] = { error: e.message };
    } finally {
      await page.close();
    }
  }

  await browser.close();

  const outputPath = path.join(__dirname, 'results', 'competitor-report-smb.json');
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  console.log(`Competitor Report saved to ${outputPath}`);
}

run();
