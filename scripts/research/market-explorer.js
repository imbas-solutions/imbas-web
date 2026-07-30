const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const QUERIES = [
  "industries investing most in custom software 2024",
  "startups series A funding logistics software",
  "fintech startups funding news",
  "medtech software market growth 2024"
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
      
      results.push({ title, snippet });
    });
    
    return results;
  } catch (error) {
    console.error(`Error scraping ${query}:`, error.message);
    return [];
  }
}

async function run() {
  console.log("Starting Market Explorer...");
  const report = {};
  
  for (const query of QUERIES) {
    console.log(`Searching for: "${query}"`);
    report[query] = await scrapeDDG(query);
    // wait 2 seconds between requests
    await new Promise(r => setTimeout(r, 2000));
  }
  
  const outputPath = path.join(__dirname, 'results', 'market-report.json');
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  console.log(`Market Report saved to ${outputPath}`);
}

run();
