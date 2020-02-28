import { Column, Entity, Index } from "typeorm";

@Index("documents_accounts_account_id", ["accountId", "documentId"], {})
@Index("documents_accounts_document_id", ["documentId", "accountId"], {})
@Entity("documents_accounts", { schema: "sugar" })
export class DocumentsAccounts {
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

  @Column("varchar", { name: "account_id", nullable: true, length: 36 })
  accountId: string | null;
}
