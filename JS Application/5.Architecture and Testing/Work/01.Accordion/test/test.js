const { chromium } = require("playwright-chromium");
const { expect } = require("chai");


const options = {
  headless: false,
  slowMo: 500,
 
};
const domain = "http://127.0.0.1:5500/";

describe("Accordion", () => {
  let page, browser;
  before(async () => (browser = await chromium.launch(options)));
  beforeEach(async () => (page = await browser.newPage()));
  afterEach(async () => await page.close());
  after(async () => await browser.close());


  it("Test titles", async () => {
    page.setDefaultTimeout(6000)
    await page.goto(domain + "/01.Accordion/index.html");

    const first = await page.locator('text=Scalable Vector Graphics')
    const second = await page.locator(":nth-match(.accordion>div>span,2)");
    const third = await page.locator('text=Unix')
    const fourth = await page.locator(":nth-match(.accordion>div>span,4)");
    
    expect(await first.textContent()).to.equal("Scalable Vector Graphics")
    expect(await second.textContent()).to.equal("Open standard");
    expect(await third.textContent()).to.equal("Unix")
    expect(await fourth.textContent()).to.equal("ALGOL")
    
  });

  it("Test More button", async () => {
    page.setDefaultTimeout(6000)
    await page.goto(domain + "/01.Accordion/index.html");
    await page.locator(':nth-match(:text("More"), 3)').click();
    await page.waitForSelector('text=Unix (trademarked as UNIX) is a family of multitasking, multiuser computer operating systems that derive from the original AT&T Unix, development starting in the 1970s at the Bell Labs research center by Ken Thompson, Dennis Ritchie, and others.')
    await page.waitForSelector("text=Less")

  });
  it.only("Test Less button", async () => {
    page.setDefaultTimeout(6000)
    await page.goto(domain + "/01.Accordion/index.html");
    await page.locator(':nth-match(:text("More"), 3)').click();
    await page.waitForSelector('text=Unix (trademarked as UNIX) is a family of multitasking, multiuser computer operating systems that derive from the original AT&T Unix, development starting in the 1970s at the Bell Labs research center by Ken Thompson, Dennis Ritchie, and others.')
    await page.waitForSelector("text=Less")
    await await page.locator(':nth-match(:text("Less"), 1)').click();
    const isItVisible=await page.isVisible("text=Less");
        expect(isItVisible).to.be.false;
  });

});
