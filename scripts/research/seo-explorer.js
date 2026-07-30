const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const QUERIES = [
  "custom software development for enterprise",
  "fintech software development agency",
  "medtech software development company",
  "logistics software development services"
];

async function scrapeDDG(query) {
  try {
    const response = await axios.get(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    
    const $ = cheerio.load(response.data);
    const results = [];
    
    $('.result__body').each((i, el) => {
      if (i >= 5) return; // top 5
      const title = $(el).find('.result__title').text().trim();
      const snippet = $(el).find('.result__snippet').text().trim();
      const url = $(el).find('.result__url').text().trim();
      
      results.push({ title, snippet, url });
    });
    
    return results;
  } catch (error) {
    console.error(`Error scraping ${query}:`, error.message);
    return [];
  }
}

async function run() {
  console.log("Starting SEO Explorer...");
  const report = {};
  
  for (const query of QUERIES) {
    console.log(`Searching for: "${query}"`);
    report[query] = await scrapeDDG(query);
    // wait 2 seconds between requests
    await new Promise(r => setTimeout(r, 2000));
  }
  
  const outputPath = path.join(__dirname, 'results', 'seo-report.json');
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  console.log(`SEO Report saved to ${outputPath}`);
}

run();
