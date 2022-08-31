const { chromium, request } = require("playwright-chromium");
const { expect } = require("chai");
const response = [
  {
    _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8",
    name: "Easy Lasagna",
    img: "assets/lasagna.jpg",
    ingredients: [
      "1 tbsp Ingredient 1",
      "2 cups Ingredient 2",
      "500 g  Ingredient 3",
      "25 g Ingredient 4",
    ],
    steps: ["Prepare ingredients", "Mix ingredients", "Cook until done"],
    _createdOn: 1613551279012,
    _id: "3987279d-0ad4-4afb-8ca9-5b256ae3b298",
  },
  {
    _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8",
    name: "Grilled Duck Fillet",
    img: "assets/roast.jpg",
    ingredients: [
      "500 g  Ingredient 1",
      "3 tbsp Ingredient 2",
      "2 cups Ingredient 3",
    ],
    steps: ["Prepare ingredients", "Mix ingredients", "Cook until done"],
    _createdOn: 1613551344360,
    _id: "8f414b4f-ab39-4d36-bedb-2ad69da9c830",
  },
  {
    _ownerId: "847ec027-f659-4086-8032-5173e2f9c93a",
    name: "Roast Trout",
    img: "assets/fish.jpg",
    ingredients: [
      "4 cups Ingredient 1",
      "1 tbsp Ingredient 2",
      "1 tbsp Ingredient 3",
      "750 g  Ingredient 4",
      "25 g Ingredient 5",
    ],
    steps: ["Prepare ingredients", "Mix ingredients", "Cook until done"],
    _createdOn: 1613551388703,
    _id: "985d9eab-ad2e-4622-a5c8-116261fb1fd2",
  },
];

let browser;
let context;
let page;

describe("E2E tests", function () {
  this.timeout(16000);

  before(async () => {
    browser = await chromium.launch({ headless: false, slowMo: 500 });
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

  it("render recipe", async () => {
    await page.goto(`http://localhost:5500/index.html`);

    const route = await page.route("../data/recipes", (route, request) => {
      route.fulfill({
        body: JSON.stringify(response),
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
        },
      });
    });

    await page.click("text=Easy Lasagna");
    const article = await page.$eval("#details article", (r) => r.innerHTML);
    expect(article).to.equal(
      '<h2>Easy Lasagna</h2><div class="band"><div class="thumb"><img src="assets/lasagna.jpg"></div><div class="ingredients"><h3>Ingredients:</h3><ul><li>1 tbsp Ingredient 1</li><li>2 cups Ingredient 2</li><li>500 g  Ingredient 3</li><li>25 g Ingredient 4</li></ul></div></div><div class="description"><h3>Preparation:</h3><p>Prepare ingredients</p><p>Mix ingredients</p><p>Cook until done</p></div>'
    );
  });

  it("register", async () => {
    await page.goto(`http://localhost:5500/index.html`);

    await page.locator(':nth-match(:text("Register"), 1)').click();

    await page.fill("input[name=email]", "niko323.abv.bg");
    await page.fill("input[name=password]", "123");
    await page.fill("input[name=rePass]", "123");

    const [response] = await Promise.all([
      page.waitForRequest((request) => request.method() == "POST"),
      page.locator('form :text("Register")').click(),
    ]);

    const user = JSON.parse(response.postData());
    console.log(user);
    expect(user.email).to.equal("niko323.abv.bg");
    expect(user.password).to.equal("123");
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
    expect(recipe.img).to.equal("https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg");
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

    await page.waitForSelector('text=saf');
    await page.waitForSelector('text=a');
    await page.waitForSelector('text=dsad');
   
  });

  it.only("render newest recipes", async () => {
    await page.goto(`http://localhost:5500/index.html`);

    await page.waitForSelector('text=Easy Lasagna');
    await page.waitForSelector('text=asf');

    await page.click('text=Next>')

    await page.waitForSelector('text=dsad');
   
  });
});


// const response = await page.evaluate(async () => {
//     return await fetch("http://localhost:3030/data/recipes")
//       .then(r => r.ok ? r.json() : Promise.reject(r))
//   })
