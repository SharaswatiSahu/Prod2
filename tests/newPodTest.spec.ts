import { test } from '@playwright/test';
import { ProductPage } from '../pages/productPage';



test('Add new book product', async ({ page }) => {
  const productPage = new ProductPage(page);

  await productPage.goto();
  await page.waitForTimeout(3000); 
  await productPage.clickAddProduct();
  await page.waitForTimeout(3000);
  await productPage.fillProductTitle('Blockchain-MLAI21 Books');
  await productPage.fillProductName('Java File');
  await productPage.selectCategory('Books');
  await productPage.fillRating('2');
  await productPage.fillDiscount('12');
  await productPage.fillQuantity('2');
  await productPage.fillDescription('books');
  await productPage.checkPremiumQuality();
  await productPage.fillFeature('books');
  await productPage.fillColor('black');
  await productPage.fillStock('1');
  await productPage.fillPrice('12');
  await productPage.fillImageUrl('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fbooks&psig=AOvVaw2bU9EZlCSKCABj-RxKLGAN&ust=1752566106512000&source=images&cd=vfe&opi=89978449&ved=0CBUQjhxqFwoTCPCP4tPvu44DFQAAAAAdAAAAABAE');
  await productPage.saveProduct();

  await page.close();
});
