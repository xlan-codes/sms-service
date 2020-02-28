import { Column, Entity, Index } from "typeorm";

@Index("idx_ru_role_id", ["roleId"], {})
@Index("idx_ru_user_id", ["userId"], {})
@Entity("roles_users", { schema: "sugar" })
export class RolesUsers {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "role_id", nullable: true, length: 36 })
  roleId: string | null;

  @Column("varchar", { name: "user_id", nullable: true, length: 36 })
  userId: string | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;
}
