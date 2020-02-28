import { Column, Entity, Index } from "typeorm";

@Index("idx_doc_cat", ["categoryId", "subcategoryId"], {})
@Entity("documents", { schema: "sugar" })
export class Documents {
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

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @Column("varchar", { name: "document_name", nullable: true, length: 255 })
  documentName: string | null;

  @Column("varchar", { name: "doc_id", nullable: true, length: 100 })
  docId: string | null;

  @Column("varchar", {
    name: "doc_type",
    nullable: true,
    length: 100,
    default: () => "'Sugar'"
  })
  docType: string | null;

  @Column("varchar", { name: "doc_url", nullable: true, length: 255 })
  docUrl: string | null;

  @Column("date", { name: "active_date", nullable: true })
  activeDate: string | null;

  @Column("date", { name: "exp_date", nullable: true })
  expDate: string | null;

  @Column("varchar", { name: "category_id", nullable: true, length: 100 })
  categoryId: string | null;

  @Column("varchar", { name: "subcategory_id", nullable: true, length: 100 })
  subcategoryId: string | null;

  @Column("varchar", { name: "status_id", nullable: true, length: 100 })
  statusId: string | null;

  @Column("varchar", {
    name: "document_revision_id",
    nullable: true,
    length: 36
  })
  documentRevisionId: string | null;

  @Column("char", { name: "related_doc_id", nullable: true, length: 36 })
  relatedDocId: string | null;

  @Column("char", { name: "related_doc_rev_id", nullable: true, length: 36 })
  relatedDocRevId: string | null;

  @Column("tinyint", {
    name: "is_template",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  isTemplate: boolean | null;

  @Column("varchar", { name: "template_type", nullable: true, length: 100 })
  templateType: string | null;
}
