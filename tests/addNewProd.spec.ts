import test from "@playwright/test";
import { AddNewProduct } from "../pages/addNewProduct";

test('Add a new product', async ({ page }) => {
  const addProductPage = new AddNewProduct(page);

  await addProductPage.navigateToAddProductPage();

  await addProductPage.fillProductForm({
    title: 'Laptop X100',
    manufacturer: 'TechBrand',
    category: 'electronics',
    rating: '4.5',
    discount: '10',
    warranty: '2 years',
    description: 'High performance laptop for professionals',
    premiumQuality: true,
    keyFeatures: '16GB RAM, 512GB SSD, Intel i7',
    color: 'Silver',
    stock: '25',
    price: '1200',
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fphotos%2Fcomputer-laptop-connection-desk-1846056%2F&psig=AOvVaw2On6gpLrlmjRK2RlE-fiXy&ust=1752561329819000&source=images&cd=vfe&opi=89978449&ved=0CBUQjhxqFwoTCIi3ze_du44DFQAAAAAdAAAAABAL',
  });

  await addProductPage.saveProduct();

  
});
