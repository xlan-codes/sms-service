import { Column, Entity, Index } from "typeorm";

@Index("idx_desc", ["name", "deleted"], {})
@Entity("saved_search", { schema: "sugar" })
export class SavedSearch {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 150 })
  name: string | null;

  @Column("varchar", { name: "search_module", nullable: true, length: 150 })
  searchModule: string | null;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @Column("text", { name: "contents", nullable: true })
  contents: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;
}
