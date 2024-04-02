import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './entity/photo.entity';
import { PhotoDTO } from './dto/photo-dto';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get('all')
  async findAll() {
    return await this.photoService.findAll();
  }


  @Get('/:id/:name')
  async params(
    @Param('id') id: string,
    @Param('name') name: string
  ){
    const params = {id, name}
    console.log(params)
    return { ok: true, params }
  }


  @Post()
  @UsePipes(new ValidationPipe({whitelist: true}))
  async createNewPhoto(@Body() photo: PhotoDTO) {
    try{
      const user = this
        const result = await this.photoService.create(photo)
        return result 
    } catch(e){
        return {
            message: (<Error>e).message
        }
    }
  }
}
