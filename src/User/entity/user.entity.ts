import { Photo } from 'src/photo/entity/photo.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'first_name'})
  firstName: string;

  @Column({ name: 'last_name'})
  lastName: string;

  @Column({ name: 'username'})
  userName: string;

  @Column({ name: 'photo_url'})
  photoUrl: string;

  @OneToMany(() => Photo, (photo) => photo.user, { onDelete: 'CASCADE'})
  photos: Photo[]
}
