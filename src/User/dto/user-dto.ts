import { IsString } from 'class-validator';

export class UserDto {
  @IsString()
  id: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  userName: string;

  @IsString()
  photoUrl: string;
}
