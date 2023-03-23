import { Entity, PrimaryGeneratedColumn, Column, Relation, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userID: string;

  @Column({ unique: true }) // No relationship
  username: string;

  @Column({ unique: true }) // No relationship
  passwordHash: string;

  @Column({ default: false })
  isPro: boolean;

  @Column({ default: false })
  isAdmin: boolean;

  @OneToMany(() => Link, (link) => links.user, {cascade: ['insert', 'update'] })
  links: Relation<Link>[];
}
