import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserDto } from './dto/user-dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>
  ) {}


  async getAll(){
    
    return await this.userRepository.find()
  }


  async create(user: UserDto){
    return await this.userRepository.save(user)
  }


  async getByID(id: string) {
    const result = await this.userRepository.findOne({ where: { id } });
    console.log(result);
    
    return result
  }
}
