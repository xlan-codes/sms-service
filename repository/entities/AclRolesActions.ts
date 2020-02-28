import { Column, Entity, Index } from "typeorm";

@Index("idx_acl_role_id", ["roleId"], {})
@Index("idx_acl_action_id", ["actionId"], {})
@Index("idx_aclrole_action", ["roleId", "actionId"], {})
@Entity("acl_roles_actions", { schema: "sugar" })
export class AclRolesActions {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "role_id", nullable: true, length: 36 })
  roleId: string | null;

  @Column("varchar", { name: "action_id", nullable: true, length: 36 })
  actionId: string | null;

  @Column("int", { name: "access_override", nullable: true })
  accessOverride: number | null;

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
