import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity("post")
class Post {

    @Column()
    @PrimaryGeneratedColumn("uuid")
    id: string



}
