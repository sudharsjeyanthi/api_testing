import { test, expect } from '@playwright/test';
import { UserApiPage } from '../Pages/UserApiPage';

test('PUT API request', async ({ request }) => {
    const user = new UserApiPage();
    const response = await user.updation(request);
    expect(response.status()).toBe(200);
    console.log(await response.text());
})