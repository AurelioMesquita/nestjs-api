import { AuthDto } from './dto/auth.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
	signup(dto: AuthDto) {
		return 'ok';
	}

	signin() {
		return { msg: 'I have signin up' };
	}
}
