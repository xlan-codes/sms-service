import { Column, Entity, Index } from "typeorm";

@Index("idx_username", ["username"], {})
@Entity("users_password_link", { schema: "sugar" })
export class UsersPasswordLink {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "username", nullable: true, length: 36 })
  username: string | null;

  @Column("datetime", { name: "date_generated", nullable: true })
  dateGenerated: Date | null;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;
}
