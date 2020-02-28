import { Column, Entity, Index } from "typeorm";

@Index("idx_docu_opps_oppo_id", ["opportunityId", "documentId"], {})
@Index("idx_docu_oppo_docu_id", ["documentId", "opportunityId"], {})
@Entity("documents_opportunities", { schema: "sugar" })
export class DocumentsOpportunities {
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

  @Column("varchar", { name: "opportunity_id", nullable: true, length: 36 })
  opportunityId: string | null;
}
