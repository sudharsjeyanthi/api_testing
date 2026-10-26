
import { test, expect } from '@playwright/test';
import { UserApiPage } from '../Pages/UserApiPage';

test('GET API Request', async ({ request }) => {
  const user = new UserApiPage();
  const response = await user.retrieval(request);
  expect(response.status()).toBe(200);
  console.log(await response.text());
})