import { Column, Entity, Index } from "typeorm";

@Index("idx_proj_acct_proj", ["projectId"], {})
@Index("idx_proj_acct_acct", ["accountId"], {})
@Index("projects_accounts_alt", ["projectId", "accountId"], {})
@Entity("projects_accounts", { schema: "sugar" })
export class ProjectsAccounts {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "account_id", nullable: true, length: 36 })
  accountId: string | null;

  @Column("varchar", { name: "project_id", nullable: true, length: 36 })
  projectId: string | null;

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
