import axios from 'axios';
import * as cheerio from 'cheerio';

const url = 'https://www.amazon.com/Handheld-Console-Pre-Loaded-Gyroscope-RG505-Grey-new/dp/B0BPS41BP3/ref=sr_1_4?crid=2YEERPW7W4SV9&keywords=anbernic%2Brg505&qid=1688255565&sprefix=anbernic%2B%2Caps%2C168&sr=8-4&th=1';
const response = await axios.get(url);
const html = response.data;

const $ = cheerio.load(html);
const title = $('#productTitle').text().trim();
const price = $('#priceblock_ourprice').text().trim();
