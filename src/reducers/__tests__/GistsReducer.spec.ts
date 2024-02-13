import type { Gist } from '@/types';
import { describe, it, expect } from 'vitest'
import { filterGistsByName } from '../GistsReducer';

const gistArrayMock: Gist[] = [
    {
        id: 'id1',
        private: true,
        file: {
            fileName: 'Test 1',
            description: 'This is the description to test',
            fileUrl: 'https://google.com'
        },
        createdAt: Date().toString(),
        updatedAt: Date().toString(),
    }, 
    {
        id: 'id2',
        private: true,
        file: {
            fileName: 'Lorem upsum',
            description: 'This is the description',
            fileUrl: 'https://google.com'
        },
        createdAt: Date().toString(),
        updatedAt: Date().toString(),
    }
]

describe('GistsReducer filterGistsByName', () => {
    it('Filters the gists properly', () => {
        const searchString = 'Test';
        const filteredArray = filterGistsByName(gistArrayMock, searchString);

        expect(filteredArray.length).toEqual(1);
        expect(filteredArray[0].id).toEqual('id1');
    })

    it('Returns all the items', () => {
        const searchString = '';
        const filteredArray = filterGistsByName(gistArrayMock, searchString);

        expect(filteredArray.length).toEqual(2);
    })

    it('Returns nothing', () => {
        const searchString = 'Vitests';
        const filteredArray = filterGistsByName(gistArrayMock, searchString);

        expect(filteredArray.length).toEqual(0);
    })
})