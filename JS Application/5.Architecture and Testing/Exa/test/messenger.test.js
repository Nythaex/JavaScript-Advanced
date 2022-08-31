const { chromium, request } = require("playwright-chromium");
const { expect } = require("chai");

let browser;
let context;
let page;

describe("Messenger", function () {
  this.timeout(16000);

  before(async () => {
    browser = await chromium.launch({ headless: false, slowMo: 100 });
    // browser = await chromium.launch();
  });

  after(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    context = await browser.newContext();

    // block intensive resources and external calls (page routes take precedence)
    // await context.route('**/*.{png,jpg,jpeg}', route => route.abort());
    // await context.route(url => {
    //     return url.hostname != 'localhost';
    // }, route => route.abort());

    page = await context.newPage();
  });

  afterEach(async () => {
    await page.close();
    await context.close();
  });

  it("text box", async () => {
    await page.goto(`http://127.0.0.1:5500/01.Messenger/index.html`);

    await page.fill("input[id=author]", "Niki");
    await page.fill("input[id=content]", "Hello I am Niki");
    await page.click("text=Send");

    await page.fill("input[id=author]", "Kiro");
    await page.fill("input[id=content]", "Hello, Niki");
    await page.click("text=Send");

    await page.click("text=Refresh");

    const textareaValue = await page.$eval("#messages", (t) => t.value);
    expect(textareaValue).contain("Niki");
    expect(textareaValue).contain("Hello I am Niki");
    expect(textareaValue).contain("Kiro");
    expect(textareaValue).contain("Hello, Niki");
  });
  it("Send Messege", async () => {
    await page.goto(`http://127.0.0.1:5500/01.Messenger/index.html`);

    await page.fill("input[id=author]", "Niki");
    await page.fill("input[id=content]", "Hello I am Niki");

    const [response] = await Promise.all([
      page.waitForRequest((request) => request.method() == "POST"),
      page.locator("text=Send").click(),
    ]);

    const message = JSON.parse(response.postData());

    console.log(message);
    expect(message.author).to.equal("Niki");
    expect(message.content).to.equal("Hello I am Niki");
  });
});

describe("Book-Library", function () {
  this.timeout(16000);

  before(async () => {
    browser = await chromium.launch({ headless: false, slowMo: 1500 });
    // browser = await chromium.launch();
  });

  after(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    context = await browser.newContext();

    // block intensive resources and external calls (page routes take precedence)
    // await context.route('**/*.{png,jpg,jpeg}', route => route.abort());
    // await context.route(url => {
    //     return url.hostname != 'localhost';
    // }, route => route.abort());

    page = await context.newPage();
  });

  afterEach(async () => {
    await page.close();
    await context.close();
  });

  it("load", async () => {
    await page.goto(`http://127.0.0.1:5500/02.Book-Library/index.html`);

    await page.click("text=LOAD ALL BOOKS");

    await page.waitForSelector("text=War");
    await page.waitForSelector("text=God Of War");
  });
  it("add book", async () => {
    await page.goto(`http://127.0.0.1:5500/02.Book-Library/index.html`);

    await page.fill("input[name=author]", "Picaso");
    await page.fill("input[name=title]", "He is a painter, not writer");

    const [response] = await Promise.all([
      page.waitForRequest((request) => request.method() == "POST"),
      page.locator("text=Submit").click(),
    ]);

    const book = JSON.parse(response.postData());

    expect(book.author).to.equal("Picaso");
    expect(book.title).to.equal("He is a painter, not writer");
  });
  it.only("edit", async () => {
    await page.goto(`http://127.0.0.1:5500/02.Book-Library/index.html`);

    await page.click("text=LOAD ALL BOOKS");
    await page.locator(':nth-match(:text("Edit"), 2)').click();

    await page.click('text=Edit FORM TITLE AUTHOR Save >> [placeholder="Title..."]');
    await page.fill('text=Edit FORM TITLE AUTHOR Save >> [placeholder="Title..."]', 'Not a writer');

    const [response] = await Promise.all([
      page.waitForRequest((request) => request.method() == "PUT"),
      page.locator('form :text("Save")').click(),
    ]);

    const book = JSON.parse(response.postData());

    expect(book.author).to.equal("Picaso");
    expect(book.title).to.equal("Not a writer");
  });
  it("delete", async () => {
    await page.goto(`http://127.0.0.1:5500/02.Book-Library/index.html`);

    await page.click("text=LOAD ALL BOOKS");
    page.on("dialog", (dialog) => dialog.accept());
    await page.click("text=Delete");

    await page.click("text=LOAD ALL BOOKS");
    expect(await page.isVisible("text=123")).to.be.false;
  });
});

it("login", async () => {
  await page.goto(`http://localhost:5500/index.html`);

  await page.locator(':nth-match(:text("Login"), 1)').click();

  await page.fill("input[name=email]", "niko323.abv.bg");
  await page.fill("input[name=password]", "123");

  const [response] = await Promise.all([
    page.waitForRequest((request) => request.method() == "POST"),
    page.locator('form :text("Login")').click(),
  ]);

  const user = JSON.parse(response.postData());
  console.log(user);
  expect(user.email).to.equal("niko323.abv.bg");
  expect(user.password).to.equal("123");
});

it("createRecipe", async () => {
  await page.goto(`http://localhost:5500/index.html`);

  await page.locator(':nth-match(:text("Login"), 1)').click();

  await page.fill("input[name=email]", "niko323.abv.bg");
  await page.fill("input[name=password]", "123");
  await page.locator('form :text("Login")').click();

  await page.locator(':nth-match(:text("Create Recipe"), 1)').click();

  await page.fill("input[name=name]", "Salad");
  await page.fill(
    "input[name=img]",
    "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"
  );
  await page.fill("textarea[name=ingredients]", "tomato\ncheese");
  await page.fill("textarea[name=steps]", "prepare\ncook");

  const [response] = await Promise.all([
    page.waitForRequest((request) => request.method() == "POST"),
    page.locator('form :text("Create Recipe")').click(),
  ]);
  const recipe = JSON.parse(response.postData());
  console.log(recipe);
  expect(recipe.name).to.equal("Salad");
  expect(recipe.img).to.equal(
    "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"
  );
  expect(recipe.ingredients.join("\n")).to.equal("tomato\ncheese");
  expect(recipe.steps.join("\n")).to.equal("prepare\ncook");

  await page.waitForSelector("text=Edit");
  await page.waitForSelector("text=Delete");
});

it("editRecipe", async () => {
  await page.goto(`http://localhost:5500/index.html`);

  await page.locator(':nth-match(:text("Login"), 1)').click();

  await page.fill("input[name=email]", "niko323.abv.bg");
  await page.fill("input[name=password]", "123");
  await page.locator('form :text("Login")').click();

  await page.locator(':nth-match(:text("Salad"), 1)').click();
  await page.click("text=Edit");

  expect(await page.$eval("form input[name=name]", (f) => f.value)).to.equal(
    "Salad"
  );
  expect(await page.$eval("form input[name=img]", (f) => f.value)).to.equal(
    "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"
  );
  expect(
    await page.$eval("form textarea[name=ingredients]", (f) => f.value)
  ).to.equal("tomato\ncheese");
  expect(
    await page.$eval("form textarea[name=steps]", (f) => f.value)
  ).to.equal("prepare\ncook");

  await page.fill("input[name=img]", "dalaS");
  const [response] = await Promise.all([
    page.waitForRequest((request) => request.method() == "PUT"),
    page.locator("text=Update Recipe").click(),
  ]);

  const recipe = await JSON.parse(response.postData());
  expect(recipe.name).to.equal("Salad");
  expect(recipe.img).to.equal("dalaS");
  expect(recipe.ingredients.join("\n")).to.equal("tomato\ncheese");
  expect(recipe.steps.join("\n")).to.equal("prepare\ncook");
});

it("deleteRecipe", async () => {
  await page.goto(`http://localhost:5500/index.html`);

  await page.locator(':nth-match(:text("Login"), 1)').click();

  await page.fill("input[name=email]", "niko323.abv.bg");
  await page.fill("input[name=password]", "123");
  await page.locator('form :text("Login")').click();

  await page.locator(':nth-match(:text("Salad"), 1)').click();
  await page.on("dialog", (dialog) => dialog.accept());
  await page.click("text=Delete");
  await page.waitForSelector("text=Recipe deleted");
});

it("render newest recipes", async () => {
  await page.goto(`http://localhost:5500/home.html`);

  await page.waitForSelector("text=saf");
  await page.waitForSelector("text=a");
  await page.waitForSelector("text=dsad");
});

it("render newest recipes", async () => {
  await page.goto(`http://localhost:5500/index.html`);

  await page.waitForSelector("text=Easy Lasagna");
  await page.waitForSelector("text=asf");

  await page.click("text=Next>");

  await page.waitForSelector("text=dsad");
});

// const response = await page.evaluate(async () => {
//     return await fetch("http://localhost:3030/data/recipes")
//       .then(r => r.ok ? r.json() : Promise.reject(r))
//   })
