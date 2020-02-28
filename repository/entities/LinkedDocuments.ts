import { Column, Entity, Index } from "typeorm";

@Index("idx_parent_document", ["parentType", "parentId", "documentId"], {})
@Entity("linked_documents", { schema: "sugar" })
export class LinkedDocuments {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "parent_id", nullable: true, length: 36 })
  parentId: string | null;

  @Column("varchar", { name: "parent_type", nullable: true, length: 25 })
  parentType: string | null;

  @Column("varchar", { name: "document_id", nullable: true, length: 36 })
  documentId: string | null;

  @Column("varchar", {
    name: "document_revision_id",
    nullable: true,
    length: 36
  })
  documentRevisionId: string | null;

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
