import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import { getRecords, getRecordLikes } from './api';

const mockApiData = {
  data: {
    data: [
      {
        artist: { name: 'Neha Kakkar' },
        genre: { name: 'Bollywood' },
        id: '07075cdb-9e5c-41ec-8c09-9a1322dd92d8',
        albumArtUrl: 'https://i.scdn.co/image/ab67616d0000b273dc1f496d2a8d75f7fda092b6',
        like: true,
        likes_count: 7,
        name: 'Aankh Marey',
      },
    ],
  },
};
const mockManipulatedData = [{
  albumArtUrl: 'https://i.scdn.co/image/ab67616d0000b273dc1f496d2a8d75f7fda092b6',
  artist: { name: 'Neha Kakkar' },
  genre: { name: 'Bollywood' },
  id: '07075cdb-9e5c-41ec-8c09-9a1322dd92d8',
  like: true,
  likes_count: 7,
  name: 'Aankh Marey',
}];
const mockDataLikes = {
  data: {
    data: [
      {
        count: 1,
        like: true,
      },
    ],
  },
};

describe('Api test', () => {
  test('should get data from backend', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce(mockApiData).mockResolvedValueOnce(mockApiData);
    const response = await getRecords();
    console.log(response);
    expect(response).toEqual(mockManipulatedData);
  });
  describe('Api test', () => {
    test('should get data from backend', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce(mockDataLikes).mockResolvedValueOnce(mockDataLikes);
      const response = await getRecordLikes();
      console.log(response);
      expect(response).toEqual(mockManipulatedData);
    });
  });
});
