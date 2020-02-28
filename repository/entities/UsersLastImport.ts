import { Column, Entity, Index } from "typeorm";

@Index("idx_user_id", ["assignedUserId"], {})
@Entity("users_last_import", { schema: "sugar" })
export class UsersLastImport {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @Column("varchar", { name: "import_module", nullable: true, length: 36 })
  importModule: string | null;

  @Column("varchar", { name: "bean_type", nullable: true, length: 36 })
  beanType: string | null;

  @Column("char", { name: "bean_id", nullable: true, length: 36 })
  beanId: string | null;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;
}
