import { Column, Entity, Index } from "typeorm";

@Index("idx_acc_bug_acc", ["accountId"], {})
@Index("idx_acc_bug_bug", ["bugId"], {})
@Index("idx_account_bug", ["accountId", "bugId"], {})
@Entity("accounts_bugs", { schema: "sugar" })
export class AccountsBugs {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "account_id", nullable: true, length: 36 })
  accountId: string | null;

  @Column("varchar", { name: "bug_id", nullable: true, length: 36 })
  bugId: string | null;

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
