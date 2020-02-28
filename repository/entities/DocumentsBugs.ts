import { Column, Entity, Index } from "typeorm";

@Index("documents_bugs_bug_id", ["bugId", "documentId"], {})
@Index("documents_bugs_document_id", ["documentId", "bugId"], {})
@Entity("documents_bugs", { schema: "sugar" })
export class DocumentsBugs {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("varchar", { name: "document_id", nullable: true, length: 36 })
  documentId: string | null;

  @Column("varchar", { name: "bug_id", nullable: true, length: 36 })
  bugId: string | null;
}
