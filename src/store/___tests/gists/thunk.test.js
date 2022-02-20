import {
    getGists,
    getGistsStart,
    getGistsSuccess,
    getGistsError,
    searchGists,
    searchGistsStart,
    searchGistsSuccess,
    searchGistsError
} from '../../gists';

describe('gists thunk test', () => {
    describe('get gists', () => {

        it('success', async () => {
            const PAGE = 'page';
            const dispatch = jest.fn();
            const getPublicGistsApi = jest.fn().mockResolvedValue({ data: 'passed' });
            const thunk = getGists(PAGE);

            await thunk(dispatch, null, { getPublicGistsApi })

            expect(getPublicGistsApi).toBeCalledWith(PAGE);
            expect(getPublicGistsApi).toBeCalledTimes(1);
            expect(dispatch).toBeCalledTimes(2);

            expect(dispatch).toHaveBeenNthCalledWith(1, getGistsStart());
            expect(dispatch).toHaveBeenNthCalledWith(2, getGistsSuccess('passed'));
        });

        it('error', async () => {
            const PAGE = 'page';
            const ERROR = { error: 'error' };
            const dispatch = jest.fn();
            const getPublicGistsApi = jest.fn().mockRejectedValue(ERROR);
            const thunk = getGists(PAGE);

            await thunk(dispatch, null, { getPublicGistsApi })

            expect(getPublicGistsApi).toBeCalledWith(PAGE);
            expect(getPublicGistsApi).toBeCalledTimes(1);
            expect(dispatch).toBeCalledTimes(2);

            expect(dispatch).toHaveBeenNthCalledWith(1, getGistsStart());
            expect(dispatch).toHaveBeenNthCalledWith(2, getGistsError(ERROR));
        });
    });

    describe('search gists', () => {

        it('success', async () => {
            const NAME = 'name';
            const dispatch = jest.fn();
            const searchGistsApi = jest.fn().mockResolvedValue({ data: 'passed' });
            const thunk = searchGists(NAME);

            await thunk(dispatch, null, { searchGistsApi })

            expect(searchGistsApi).toBeCalledWith(NAME);
            expect(searchGistsApi).toBeCalledTimes(1);
            expect(dispatch).toBeCalledTimes(2);

            expect(dispatch).toHaveBeenNthCalledWith(1, searchGistsStart());
            expect(dispatch).toHaveBeenNthCalledWith(2, searchGistsSuccess('passed'));
        });

        it('error', async () => {
            const NAME = 'name';
            const ERROR = { error: 'error' };
            const dispatch = jest.fn();
            const searchGistsApi = jest.fn().mockRejectedValue(ERROR);
            const thunk = searchGists(NAME);

            await thunk(dispatch, null, { searchGistsApi })

            expect(searchGistsApi).toBeCalledWith(NAME);
            expect(searchGistsApi).toBeCalledTimes(1);
            expect(dispatch).toBeCalledTimes(2);

            expect(dispatch).toHaveBeenNthCalledWith(1, searchGistsStart());
            expect(dispatch).toHaveBeenNthCalledWith(2, searchGistsError(ERROR));
        });
    });
});