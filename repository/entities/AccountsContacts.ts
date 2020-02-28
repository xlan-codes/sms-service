import { Column, Entity, Index } from "typeorm";

@Index("idx_account_contact", ["accountId", "contactId"], {})
@Index("idx_contid_del_accid", ["contactId", "deleted", "accountId"], {})
@Entity("accounts_contacts", { schema: "sugar" })
export class AccountsContacts {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "contact_id", nullable: true, length: 36 })
  contactId: string | null;

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
