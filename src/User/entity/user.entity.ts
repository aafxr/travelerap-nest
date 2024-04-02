import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}
