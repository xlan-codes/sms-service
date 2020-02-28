import { Column, Entity, Index } from "typeorm";

@Index("documents_cases_case_id", ["caseId", "documentId"], {})
@Index("documents_cases_document_id", ["documentId", "caseId"], {})
@Entity("documents_cases", { schema: "sugar" })
export class DocumentsCases {
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

  @Column("varchar", { name: "case_id", nullable: true, length: 36 })
  caseId: string | null;
}
