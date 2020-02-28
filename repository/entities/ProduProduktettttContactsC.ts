import { Column, Entity, Index } from "typeorm";

@Index(
  "produ_produktetttt_contacts_ida1",
  ["produProduktettttContactscontactsIda"],
  {}
)
@Index(
  "produ_produktetttt_contacts_alt",
  ["produProduktettttContactsproduProduktettttIdb"],
  {}
)
@Entity("produ_produktetttt_contacts_c", { schema: "sugar" })
export class ProduProduktettttContactsC {
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
    name: "produ_produktetttt_contactscontacts_ida",
    nullable: true,
    length: 36
  })
  produProduktettttContactscontactsIda: string | null;

  @Column("varchar", {
    name: "produ_produktetttt_contactsprodu_produktetttt_idb",
    nullable: true,
    length: 36
  })
  produProduktettttContactsproduProduktettttIdb: string | null;
}
