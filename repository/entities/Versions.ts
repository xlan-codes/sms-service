import { Column, Entity, Index } from "typeorm";

@Index("idx_version", ["name", "deleted"], {})
@Entity("versions", { schema: "sugar" })
export class Versions {
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

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "file_version", nullable: true, length: 255 })
  fileVersion: string | null;

  @Column("varchar", { name: "db_version", nullable: true, length: 255 })
  dbVersion: string | null;
}
