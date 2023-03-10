import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { UserDto } from './dto/user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    byId(id: number, selectObject?: Prisma.UserSelect): Promise<{
        email: string;
        password: string;
        createAt?: Date;
        updatedAt?: Date;
        name: string;
        avatarPath: string;
        phone: string;
        orders?: import(".prisma/client").Order[];
        reviews?: import(".prisma/client").Review[];
        favorites: import(".prisma/client").Product[];
        id: number;
        _count?: Prisma.UserCountOutputType;
    }>;
    updateProfile(id: number, dto: UserDto): Promise<import(".prisma/client").User>;
    toggleFavorite(userId: number, productId: number): Promise<string>;
}
