import { Column, Entity, Index } from "typeorm";

@Index(
  "produ_produktet_contacts_ida1",
  ["produProduktetContactscontactsIda"],
  {}
)
@Index(
  "produ_produktet_contacts_alt",
  ["produProduktetContactsproduProduktetIdb"],
  {}
)
@Entity("produ_produktet_contacts_c", { schema: "sugar" })
export class ProduProduktetContactsC {
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
    name: "produ_produktet_contactscontacts_ida",
    nullable: true,
    length: 36
  })
  produProduktetContactscontactsIda: string | null;

  @Column("varchar", {
    name: "produ_produktet_contactsprodu_produktet_idb",
    nullable: true,
    length: 36
  })
  produProduktetContactsproduProduktetIdb: string | null;
}
