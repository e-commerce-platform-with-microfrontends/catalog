import { Selector } from 'testcafe';

fixture`ProductListAndDetails`
  .page`https://catalog-mfe-dev.netlify.app`

test('User should see a list of products and navigate to details of any', async t => {
  await t.expect(Selector('.product_card').count).eql(20);
  await t.click('#go-to-product-details-2');
  await t.expect(Selector('h1').withText('Mens Casual Premium Slim Fit T-Shirts').exists).ok();
  await t.expect(Selector('h3').withText('Ratings and Reviews').exists).ok();
});
