import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserModule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
  // Add more columns as needed
}