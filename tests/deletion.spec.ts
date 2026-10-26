import { test, expect } from '@playwright/test';
import { UserApiPage } from '../Pages/UserApiPage';

test('DELETE API Request', async ({ request }) => {
    const user = new UserApiPage();
    const response = await user.deletion(request);
    expect(response.status()).toBe(204);
})