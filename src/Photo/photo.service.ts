import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './entity/photo.entity';
import { PhotoDTO } from './dto/photo-dto';

@Injectable()
export class PhotoService {
    constructor(
        @Inject('PHOTO_REPOSITORY') private photoRepository: Repository<Photo>
    ){}

    async create(photo: PhotoDTO){
        return await this.photoRepository.save(photo)
    }

    async findAll(): Promise<Photo[]>{
        return await this.photoRepository.find() || []
    }
}
