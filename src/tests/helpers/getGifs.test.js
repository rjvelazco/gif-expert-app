import { getGifs } from '../../helpers/getGifs';

describe('Tests on getGifs fetch', () => {

    test("It should get 10 elements", async () => {

        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe(10);

    });

    test("It should be empty when an argument has not been send", async () => {

        const gifs = await getGifs('');

        expect( gifs.length ).toBe(0);

    });



});