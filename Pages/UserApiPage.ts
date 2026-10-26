
import { APIRequestContext } from '@playwright/test';

export class UserApiPage {

    async retrieval(request: APIRequestContext) {
        return await request.get(
            'https://reqres.in/api/users/2'
        );
    }
    async creation(request: APIRequestContext) {
        return await request.post('https://reqres.in/api/users', {
            data: {
                "name": "sudharsana",
                "job": "IT"
            }
        });
    }
    async updation(request: APIRequestContext) {
        return await request.put('https://reqres.in/api/users/2', {
            data: {
                "name": "sudhars",
                "job": "hi"
            }
        });
    }
    async deletion(request: APIRequestContext) {
        return await request.delete('https://reqres.in/api/users/2');
    }
    async partialUpdation(request: APIRequestContext) {
        return await request.patch('https://reqres.in/api/users/2', {
            data: {
                "job": "Info"
            }
        });
    }
}


