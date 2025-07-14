
import { test } from '@playwright/test';

import { ProductListPage } from '../pages/prodListpage';

test('Add all available products to cart', async ({ page }) => {
  const list = new ProductListPage(page);
  await list.goto();

  const count = await list.getProductCount();
  console.log(`Found ${count} products`);

  for (let i = 0; i < count; ++i) {
    const product = list.products.nth(i);
    const added = await list.addToCartIfAvailable(product);
    
  }
  
 // await page.close();
});
