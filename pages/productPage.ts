
import { Page } from '@playwright/test';

export class ProductPage {
   private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://incredible-shortbread-0fe296.netlify.app/');
  }

  async clickAddProduct() {
    await this.page.getByRole('button', { name: 'Add Product' }).click();
  }

  async fillProductTitle(title: string) {
    await this.page.getByRole('textbox', { name: 'Product title' }).fill(title);
  }

  async fillProductName(name: string) {
    await this.page.getByRole('textbox', { name: 'e.g. Apple' }).fill(name);
  }

  async selectCategory(category: string) {
    await this.page
      .locator('div')
      .filter({ hasText: /^CategorySelect CategoryElectronicsWoodenFashionToysBooksFitness$/ })
      .getByRole('combobox')
      .selectOption(category);
  }

  async fillRating(rating: string) {
    await this.page.getByPlaceholder('e.g. 4.5').fill(rating);
  }

  async fillDiscount(discount: string) {
    await this.page.locator('div').filter({ hasText: /^Discount \(%\)$/ }).getByPlaceholder('e.g.').fill(discount);
  }

  async fillQuantity(quantity: string) {
    await this.page.getByPlaceholder('e.g. 1', { exact: true }).fill(quantity);
  }

  async fillDescription(description: string) {
    await this.page.getByRole('textbox', { name: 'Product description' }).fill(description);
  }

  async checkPremiumQuality() {
    await this.page.getByRole('checkbox', { name: 'Premium Quality' }).check();
  }

  async fillFeature(feature: string) {
    await this.page.getByRole('textbox', { name: 'Feature' }).fill(feature);
  }

  async fillColor(color: string) {
    await this.page.getByRole('textbox', { name: 'e.g. Silver' }).fill(color);
  }

  async fillStock(stock: string) {
    await this.page.locator('div').filter({ hasText: /^Stock$/ }).getByPlaceholder('e.g.').fill(stock);
  }

  async fillPrice(price: string) {
    await this.page.getByPlaceholder('e.g. 199').fill(price);
  }

  async fillImageUrl(url: string) {
    await this.page.getByRole('textbox', { name: 'https://' }).fill(url);
  }
  
  async saveProduct() {
    await this.page.getByRole('button', { name: 'Save Product' }).click();
  }
}
