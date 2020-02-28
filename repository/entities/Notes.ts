import { Column, Entity, Index } from "typeorm";

@Index("idx_note_name", ["name"], {})
@Index("idx_notes_parent", ["parentId", "parentType"], {})
@Index("idx_note_contact", ["contactId"], {})
@Index("idx_notes_assigned_del", ["deleted", "assignedUserId"], {})
@Entity("notes", { schema: "sugar" })
export class Notes {
  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

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

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "file_mime_type", nullable: true, length: 100 })
  fileMimeType: string | null;

  @Column("varchar", { name: "filename", nullable: true, length: 255 })
  filename: string | null;

  @Column("varchar", { name: "parent_type", nullable: true, length: 255 })
  parentType: string | null;

  @Column("char", { name: "parent_id", nullable: true, length: 36 })
  parentId: string | null;

  @Column("char", { name: "contact_id", nullable: true, length: 36 })
  contactId: string | null;

  @Column("tinyint", { name: "portal_flag", nullable: true, width: 1 })
  portalFlag: boolean | null;

  @Column("tinyint", {
    name: "embed_flag",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  embedFlag: boolean | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;
}
