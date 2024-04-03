import { IsBoolean, IsNumber, IsString, Min } from 'class-validator';

export class PhotoDTO {
  @Min(0)
  @IsNumber()
  id: number;

  @IsString()
  name: string;
  @IsString()
  description: string;

  @IsString()
  filename: string;

  @IsNumber()
  views: number;

  @IsBoolean()
  isPublished: boolean;

  @IsString()
  user: string
}
