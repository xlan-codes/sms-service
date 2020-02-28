import { Column, Entity, Index } from "typeorm";

@Index("idx_userprefnamecat", ["assignedUserId", "category"], {})
@Entity("user_preferences", { schema: "sugar" })
export class UserPreferences {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "category", nullable: true, length: 50 })
  category: string | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @Column("longtext", { name: "contents", nullable: true })
  contents: string | null;
}
