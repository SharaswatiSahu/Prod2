import { Page, Locator } from '@playwright/test';

export class AddProduct {
  private page: Page;
  private addProductButton: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.addProductButton = page.getByRole('button', { name: 'Add Product' });
  }

  async navigateToAddProductPage(): Promise<void> {
    await this.page.goto('https://incredible-shortbread-0fe296.netlify.app/');
    await this.addProductButton.click();
    
  }

 
}
