import { RequestCommon } from './../common/request-common';
export class LoginRequest extends RequestCommon {
  user: string;
  password: string;
}
