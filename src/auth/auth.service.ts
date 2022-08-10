import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
    constructor(private PrismaService: PrismaService) { }
    signup() {
        return { msg: 'I have signed up' };
    }

    signin() {
        return { msg: 'I have signin up' };
    }
}
