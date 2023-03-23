import { Entity, PrimaryColumn, Column, Relation, OneToMany } from 'typeorm';

@Entity()
export class Link {
  @PrimaryColumn()
  linkID: string;

  @Column()
  originalUrl: string;

  @Column()
  lastAccessedOn: Date;

  @Column({ default: 0 })
  numHits: number;

  @OneToMany(() => User, (user) => user.links, {cascade: ['insert', 'update'] })
  user: Relation<User>;
}
