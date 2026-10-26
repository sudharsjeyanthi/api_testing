import { test, expect } from '@playwright/test';
import { UserApiPage } from '../Pages/UserApiPage';

test('PATCH API Request', async ({ request }) => {
    const user = new UserApiPage();
    const response = await user.partialUpdation(request);
    expect(response.status()).toBe(200);
    console.log(await response.text());
})