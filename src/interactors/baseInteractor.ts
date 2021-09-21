import { CustomError, HttpErrorObject } from '@/models/error/CustomError';

interface ResponseType<T> {
  data?: T;
  error?: HttpErrorObject;
}

interface Params {
  url: string;
  body?: any;
  token?: string;
}

const createHeaders = (token?: string): HeadersInit => {
  if (token) {
    return {
      'Content-Type': 'application/json',
      token,
    };
  }
  return {
    'Content-Type': 'application/json',
  };
};

const API_BASE = '/api';

const get = async <T>({ url, token }: Params): Promise<ResponseType<T>> => {
  try {
    const res = await fetch(`${API_BASE}${url}`, {
      method: 'GET',
      credentials: 'same-origin',
      headers: createHeaders(token),
    });
    if (!res.ok) throw new CustomError(res);
    const data = (await res.json()) as T;
    return { data };
  } catch (err) {
    if (err instanceof CustomError) {
      return { error: err.serialize() };
    }
    throw err;
  }
};

const post = async <T>({
  url,
  body,
  token,
}: Params): Promise<ResponseType<T>> => {
  try {
    const res = await fetch(`${API_BASE}${url}`, {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(body),
      headers: createHeaders(token),
    });
    if (!res.ok) throw new CustomError(res);
    const data = (await res.json()) as T;
    return { data };
  } catch (err) {
    if (err instanceof CustomError) {
      return { error: err.serialize() };
    }
    throw err;
  }
};

const put = async <T>({
  url,
  body,
  token,
}: Params): Promise<ResponseType<T>> => {
  try {
    const res = await fetch(`${API_BASE}${url}`, {
      method: 'PUT',
      credentials: 'same-origin',
      body,
      headers: createHeaders(token),
    });
    if (!res.ok) throw new CustomError(res);
    const data = (await res.json()) as T;
    return { data };
  } catch (err) {
    if (err instanceof CustomError) {
      return { error: err.serialize() };
    }
    throw err;
  }
};

const destroy = async <T>({
  url,
  body,
  token,
}: Params): Promise<ResponseType<T>> => {
  try {
    const res = await fetch(`${API_BASE}${url}`, {
      method: 'DELETE',
      credentials: 'same-origin',
      body,
      headers: createHeaders(token),
    });
    if (!res.ok) throw new CustomError(res);
    const data = (await res.json()) as T;
    return { data };
  } catch (err) {
    if (err instanceof CustomError) {
      return { error: err.serialize() };
    }
    throw err;
  }
};

export const baseInteractor = {
  get,
  post,
  put,
  destroy,
};
