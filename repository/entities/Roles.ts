import { Column, Entity, Index } from "typeorm";

@Index("idx_role_id_del", ["id", "deleted"], {})
@Entity("roles", { schema: "sugar" })
export class Roles {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 150 })
  name: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("text", { name: "modules", nullable: true })
  modules: string | null;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;
}
