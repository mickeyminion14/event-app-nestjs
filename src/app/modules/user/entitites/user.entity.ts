import { CoreEntity } from 'src/app/core.entity';
import { UserType } from 'src/app/enums/role';
import { Column, Entity } from 'typeorm';

@Entity('user')
export class UserEntity extends CoreEntity {
  @Column({ name: 'email', type: 'varchar', nullable: true })
  email: string;

  @Column({ name: 'password', type: 'varchar', nullable: true })
  password: string;

  @Column({
    name: 'name',
    type: 'varchar',
    nullable: true,
  })
  name: string;
  @Column({
    name: 'role',
    type: 'varchar',
    nullable: true,
  })
  role: UserType;

  @Column({ type: 'uuid' })
  tenantId: string;
}
