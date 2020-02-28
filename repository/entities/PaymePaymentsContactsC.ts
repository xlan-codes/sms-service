import { Column, Entity, Index } from "typeorm";

@Index("payme_payments_contacts_ida1", ["paymePaymentsContactscontactsIda"], {})
@Index(
  "payme_payments_contacts_alt",
  ["paymePaymentsContactspaymePaymentsIdb"],
  {}
)
@Entity("payme_payments_contacts_c", { schema: "sugar" })
export class PaymePaymentsContactsC {
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

  @Column("varchar", {
    name: "payme_payments_contactscontacts_ida",
    nullable: true,
    length: 36
  })
  paymePaymentsContactscontactsIda: string | null;

  @Column("varchar", {
    name: "payme_payments_contactspayme_payments_idb",
    nullable: true,
    length: 36
  })
  paymePaymentsContactspaymePaymentsIdb: string | null;
}
