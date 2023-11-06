export type StatusStringCode =
  'INTERNAL_ERROR' |
  'CREATED' |
  'OK' |
  'NOT_FOUND' |
  'UNPROCESSABLE_ENTITY' |
  'BAD_REQUEST' |
  'CONFLICT' |
  'NO_CONTENT' |
  'UNAUTHORIZED' |
  'FORBIDDEN';

const INTERNAL_ERROR = 'INTERNAL_ERROR';
const CREATED = 'CREATED';
const OK = 'OK';
const NOT_FOUND = 'NOT_FOUND';
const UNPROCESSABLE = 'UNPROCESSABLE_ENTITY';
const BAD_REQUEST = 'BAD_REQUEST';
const CONFLICT = 'CONFLICT';
const NO_CONTENT = 'NO_CONTENT';
const UNAUTHORIZED = 'UNAUTHORIZED';
const FORBIDDEN = 'FORBIDDEN';

export type StatusCode =
  500 |
  201 |
  200 |
  404 |
  422 |
  400 |
  409 |
  204 |
  401 |
  403;

export default class ServiceResponse<T> {
  public status: StatusCode;
  public data: T | { message: string };

  private static mappedHttpStatus: { [key: string]: StatusCode } = {
    [INTERNAL_ERROR]: 500,
    [CREATED]: 201,
    [OK]: 200,
    [BAD_REQUEST]: 400,
    [NO_CONTENT]: 204,
    [NOT_FOUND]: 404,
    [UNPROCESSABLE]: 422,
    [CONFLICT]: 409,
    [UNAUTHORIZED]: 401,
    [FORBIDDEN]: 403,
  };

  constructor (statusString: StatusStringCode, data: T | string) {
    this.data = typeof data === 'string' ? { message: data } : data;
    this.status = ServiceResponse.mapStatusHttp(statusString);
  }

  public static mapStatusHttp (statusString: StatusStringCode): StatusCode {
    const code = this.mappedHttpStatus[statusString];
    return code || this.mappedHttpStatus['INTERNAL_ERROR'];
  }
}
