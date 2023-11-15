import axios from 'axios';
import { axiosInstance } from './constants';
import { FetchErrorType } from './types';

// // Add a global interceptor for status 513
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 513) {
//       // Handle status 513 error here
//       console.log('Status 513 Error:', error.response.data);
//     }
//     return Promise.reject(error);
//   },
// );
/**
 * Makes a request to the specified URL and returns the response as JSON.
 * @param {string} url - the url to the API
 * @param {POST | GET | PUT} method - the method of the request, default value is GET
 * @param {BodyInit} body - the body of the request
 * @returns response or response.json
 */
export default async function fetcher(
  url: string,
  method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE' = 'GET',
  body?: BodyInit,
) {
  try {
    const response = await axiosInstance.request({
      url,
      method,
      data: body,
    });

    if (response.status !== 200) {
      console.warn('fetcher: ', url, ' status: ', response.status);
      throw new FetchError(
        {
          status: response.status,
          message: 'An error occurred while fetching the data.',
          data: response.data
        }
      );
    }

    return {
      status: response.status,
      message: 'success',
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // throw new Error(error.message);
      throw new FetchError({
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
        data: null
      });
    }
    throw new FetchError({
      status: 500,
      message: 'An error occurred while fetching the data.',
      data: null
    });
  }
}

class FetchError extends Error {
  public status: number;
  public data: any;
  constructor({ status, data, message }: FetchErrorType) {
    super(message);
    this.name = 'FetchError';
    this.status = status;
    this.data = data;
  }
}
