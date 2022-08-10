import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
	signup() {
		return 'ok';
	}

	signin() {
		return { msg: 'I have signin up' };
	}
}
