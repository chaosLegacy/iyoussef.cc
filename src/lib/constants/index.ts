import axios from "axios";
import { BASE_URL } from "utils/config";
const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
const Collection = {
  USERS: process.env.NODE_ENV === 'production' ? 'users' : 'testUsers',
  LEADS: process.env.NODE_ENV === 'production' ? 'leads' : 'testLeads',
  PACKAGES: process.env.NODE_ENV === 'production' ? 'packages' : 'testPackages',
  STATES: process.env.NODE_ENV === 'production' ? 'states' : 'testStates',
  SUBSCRIPTIONS:
    process.env.NODE_ENV === 'production'
      ? 'subscriptions'
      : 'testSubscriptions',
};
const API_BASE = `${BASE_URL}api`;
const API = {
  LEADS: {
    ADD_URL: `${API_BASE}/leads/add`,
    UPDATE_URL: `${API_BASE}/leads/update`,
    LIST_URL: `${API_BASE}/leads`,
    DISABLE_URL: `${API_BASE}/leads/disable`,
    DELETE_URL: `${API_BASE}/leads/delete`,
  },
  PACKAGES: {
    ADD_URL: `${API_BASE}/packages/add`,
    UPDATE_URL: `${API_BASE}/packages/update`,
    LIST_URL: `${API_BASE}/packages`,
    DISABLE_URL: `${API_BASE}/packages/disable`,
    DELETE_URL: `${API_BASE}/packages/delete`,
  },
  SUBSCRIPTION: {
    ADD_URL: `${API_BASE}/subscriptions/add`,
    UPDATE_URL: `${API_BASE}/subscriptions/update`,
    LIST_URL: `${API_BASE}/subscriptions`,
    DELETE_URL: `${API_BASE}/subscriptions/delete`,
  },
  STATS: {
    CARDS: `${API_BASE}/stats`,
  },
};
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PHONE_REGEX = /^\+\d{1,}$/;

export { axiosInstance, Collection, API_BASE, API, EMAIL_REGEX, PHONE_REGEX };