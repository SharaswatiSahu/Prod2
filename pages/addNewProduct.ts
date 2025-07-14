import { Page, Locator } from '@playwright/test';

export class AddNewProduct {
  private page: Page;

  // UI Elements
  private addProductButton: Locator;
  private saveProductButton: Locator;

  private productTitleInput: Locator;
  private manufacturerInput: Locator;
  private categoryDropdown: Locator;
  private ratingInput: Locator;
  private discountInput: Locator;
  private warrantyInput: Locator;
  private descriptionInput: Locator;
  private premiumQualityCheckbox: Locator;
  private keyFeaturesInput: Locator;
  private colorInput: Locator;
  private stockInput: Locator;
  private priceInput: Locator;
  private imageUrlInput: Locator;

  constructor(page: Page) {
    this.page = page;

    // Buttons
    this.addProductButton = page.getByRole('button', { name: 'Add Product' });
    this.saveProductButton = page.getByRole('button', { name: 'Save Product' });

    // Inputs
    this.productTitleInput = page.getByPlaceholder('Enter Product Title');
    this.manufacturerInput = page.getByPlaceholder('Enter Manufacturer');
    this.categoryDropdown = page.locator('select[name="category"]');
    this.ratingInput = page.getByPlaceholder('Enter Rating');
    this.discountInput = page.getByPlaceholder('Enter Discount');
    this.warrantyInput = page.getByPlaceholder('Enter Warranty');
    this.descriptionInput = page.getByPlaceholder('Enter Description');
    this.premiumQualityCheckbox = page.getByLabel('Premium Quality');
    this.keyFeaturesInput = page.getByPlaceholder('Enter Key Features');
    this.colorInput = page.getByPlaceholder('Enter Color');
    this.stockInput = page.getByPlaceholder('Enter Stock');
    this.priceInput = page.getByPlaceholder('Enter Price');
    this.imageUrlInput = page.getByPlaceholder('Enter Image URL');
  }

  async navigateToAddProductPage(): Promise<void> {
    await this.page.goto('https://incredible-shortbread-0fe296.netlify.app/');
    await this.addProductButton.click();
  }

  async fillProductForm(product: {
    title: string;
    manufacturer: string;
    category: string;
    rating: string;
    discount: string;
    warranty: string;
    description: string;
    premiumQuality: boolean;
    keyFeatures: string;
    color: string;
    stock: string;
    price: string;
    imageUrl: string;
  }): Promise<void> {
    await this.productTitleInput.fill(product.title);
    await this.manufacturerInput.fill(product.manufacturer);
    await this.categoryDropdown.selectOption(product.category);
    await this.ratingInput.fill(product.rating);
    await this.discountInput.fill(product.discount);
    await this.warrantyInput.fill(product.warranty);
    await this.descriptionInput.fill(product.description);
    
    if (product.premiumQuality) {
      await this.premiumQualityCheckbox.check();
    } else {
      await this.premiumQualityCheckbox.uncheck();
    }

    await this.keyFeaturesInput.fill(product.keyFeatures);
    await this.colorInput.fill(product.color);
    await this.stockInput.fill(product.stock);
    await this.priceInput.fill(product.price);
    await this.imageUrlInput.fill(product.imageUrl);
  }

  async saveProduct(): Promise<void> {
    await this.saveProductButton.click();
  }
}
