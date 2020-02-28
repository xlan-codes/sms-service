import { Column, Entity, Index } from "typeorm";

@Index("idx_releases", ["name", "deleted"], {})
@Entity("releases", { schema: "sugar" })
export class Releases {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("int", { name: "list_order", nullable: true })
  listOrder: number | null;

  @Column("varchar", { name: "status", nullable: true, length: 100 })
  status: string | null;
}
