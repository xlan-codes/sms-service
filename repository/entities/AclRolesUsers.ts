import { Column, Entity, Index } from "typeorm";

@Index("idx_aclrole_id", ["roleId"], {})
@Index("idx_acluser_id", ["userId"], {})
@Index("idx_aclrole_user", ["roleId", "userId"], {})
@Entity("acl_roles_users", { schema: "sugar" })
export class AclRolesUsers {
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
