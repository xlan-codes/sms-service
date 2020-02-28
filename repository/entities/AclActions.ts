import { Column, Entity, Index } from "typeorm";

@Index("idx_aclaction_id_del", ["id", "deleted"], {})
@Index("idx_category_name", ["category", "name"], {})
@Entity("acl_actions", { schema: "sugar" })
export class AclActions {
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

  @Column("varchar", { name: "category", nullable: true, length: 100 })
  category: string | null;

  @Column("varchar", { name: "acltype", nullable: true, length: 100 })
  acltype: string | null;

  @Column("int", { name: "aclaccess", nullable: true })
  aclaccess: number | null;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;
}
