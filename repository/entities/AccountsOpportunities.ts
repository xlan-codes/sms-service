import { Column, Entity, Index } from "typeorm";

@Index("idx_account_opportunity", ["accountId", "opportunityId"], {})
@Index("idx_oppid_del_accid", ["opportunityId", "deleted", "accountId"], {})
@Entity("accounts_opportunities", { schema: "sugar" })
export class AccountsOpportunities {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "opportunity_id", nullable: true, length: 36 })
  opportunityId: string | null;

  @Column("varchar", { name: "account_id", nullable: true, length: 36 })
  accountId: string | null;

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
