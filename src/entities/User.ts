import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm"

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    numero_1: number

    @Column()
    numero_2: number

    @Column()
    operacion?: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}