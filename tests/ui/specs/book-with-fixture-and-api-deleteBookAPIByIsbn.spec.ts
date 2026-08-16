import { test } from '../fixtures/books-fixture';
import { APIRequestContext, Page } from '@playwright/test';
import baseAPIUrl from '../../utils/environmentBaseUrl';
import deleteBookAPIRequest from '../../api/requests/delete-books-collection';
import userData from '../../data/user-data';

let apiContext: APIRequestContext;
const env = process.env.ENV!;
const password = process.env.PASSWORD!;
const userId = process.env.USERID!;
const userName = process.env.USERNAME!;

test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
      baseURL: baseAPIUrl[env].api,
      extraHTTPHeaders: {
          Authorization: `Basic ${Buffer.from(`${userName}:${password}`).toString('base64')}`,
          Accept: 'application/json',
      },
  });
});

test.describe('Book - Delete Book By ISBN', () => {
  test.use({ isDupe: true });
  test('Add duplicate book', async ({ bookPage }) => {
        await addBooks(userId, userData.books.duplicate);
        await bookPage.goto(userData.books.duplicate);
    });
  });

  async function addBooks(userId: string, isbn: string) {
    await deleteBookAPIRequest.deleteBookAPIByIsbn(apiContext, userId, isbn);
    //await createBookAPIRequest.addBookToCollection(apiContext, userId, isbn);
  };