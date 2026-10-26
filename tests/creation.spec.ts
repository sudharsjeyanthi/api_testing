import { test, expect } from '@playwright/test';
import { UserApiPage } from '../Pages/UserApiPage';

test('POST API request', async ({ request }) => {
    const user = new UserApiPage();
    const response = await user.creation(request);
    expect(response.status()).toBe(201);
    console.log(await response.text());
})

