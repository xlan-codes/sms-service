import { Column, Entity, Index } from "typeorm";

@Index("idx_cron_remove_document_bean_id", ["beanId"], {})
@Index("idx_cron_remove_document_stamp", ["dateModified"], {})
@Entity("cron_remove_documents", { schema: "sugar" })
export class CronRemoveDocuments {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "bean_id", nullable: true, length: 36 })
  beanId: string | null;

  @Column("varchar", { name: "module", nullable: true, length: 25 })
  module: string | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;
}
