import { Column, Entity, Index } from "typeorm";

@Index("idx_role_id", ["roleId"], {})
@Index("idx_module_id", ["moduleId"], {})
@Entity("roles_modules", { schema: "sugar" })
export class RolesModules {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "role_id", nullable: true, length: 36 })
  roleId: string | null;

  @Column("varchar", { name: "module_id", nullable: true, length: 36 })
  moduleId: string | null;

  @Column("tinyint", {
    name: "allow",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  allow: boolean | null;

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
