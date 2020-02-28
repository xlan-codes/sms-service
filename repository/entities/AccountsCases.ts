import { Column, Entity, Index } from "typeorm";

@Index("idx_acc_case_acc", ["accountId"], {})
@Index("idx_acc_acc_case", ["caseId"], {})
@Entity("accounts_cases", { schema: "sugar" })
export class AccountsCases {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "account_id", nullable: true, length: 36 })
  accountId: string | null;

  @Column("varchar", { name: "case_id", nullable: true, length: 36 })
  caseId: string | null;

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
