import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './entity/photo.entity';
import { PhotoDTO } from './dto/photo-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';

@Injectable()
export class PhotoService {
    constructor(
        @InjectRepository(Photo) private readonly photoRepository: Repository<Photo>,
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){}

    async create(photo: PhotoDTO){
        const user = await this.userRepository.findOne({where: {id: photo.user}})

        if(user){
            const _photo: Photo = {...photo, user}
            return await this.photoRepository.save(_photo)
        } else {
            throw new BadRequestException()
        }

    }

    async findAll(): Promise<Photo[]>{
        return await this.photoRepository.find() || []
    }
}
