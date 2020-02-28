import { Column, Entity, Index } from "typeorm";

@Index("idx_emails_beans_bean_id", ["beanId"], {})
@Index("idx_emails_beans_email_bean", ["emailId", "beanId", "deleted"], {})
@Entity("emails_beans", { schema: "sugar" })
export class EmailsBeans {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("char", { name: "email_id", nullable: true, length: 36 })
  emailId: string | null;

  @Column("char", { name: "bean_id", nullable: true, length: 36 })
  beanId: string | null;

  @Column("varchar", { name: "bean_module", nullable: true, length: 100 })
  beanModule: string | null;

  @Column("text", { name: "campaign_data", nullable: true })
  campaignData: string | null;

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
