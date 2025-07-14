
import { Page, Locator } from '@playwright/test';

export class ProductListPage {
  readonly page: Page;
  readonly products: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.locator('.product-item'); 
    this.cartButton = page.getByRole('button', { name: /Add to cart/i });
  }

  async goto() {
    await this.page.goto('https://incredible-shortbread-0fe296.netlify.app/');
  }

  async getProductCount(): Promise<number> {
    return this.products.count();
  }

  async isOutOfStock(product: Locator): Promise<boolean> {
    return (await product.textContent())?.includes('Out of stock') ?? false;
  }

  async addToCartIfAvailable(product: Locator): Promise<boolean> {
    if (await this.isOutOfStock(product)) {
      console.log('Skipping out-of-stock item');
      return false;
    } else {
      const addBtn = product.getByRole('button', { name: /Add to cart/i });
      await addBtn.click();
      console.log('Added item to cart');
      return true;
    }
  }

  


}
