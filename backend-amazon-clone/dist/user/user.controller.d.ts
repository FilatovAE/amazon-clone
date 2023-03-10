import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: number): Promise<{
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
        _count?: import(".prisma/client").Prisma.UserCountOutputType;
    }>;
    getNewTokens(id: number, dto: UserDto): Promise<import(".prisma/client").User>;
    toggleFavorite(id: number, productId: string): Promise<string>;
}
