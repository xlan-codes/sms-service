import { Column, Entity, Index } from "typeorm";

@Index(
  "produ_produktetttt_produ_services_ida1",
  ["produProduktettttProduServicesproduProduktettttIda"],
  {}
)
@Index(
  "produ_produktetttt_produ_services_alt",
  ["produProduktettttProduServicesproduServicesIdb"],
  {}
)
@Entity("produ_produktetttt_produ_services_c", { schema: "sugar" })
export class ProduProduktettttProduServicesC {
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
    name: "produ_produktetttt_produ_servicesprodu_produktetttt_ida",
    nullable: true,
    length: 36
  })
  produProduktettttProduServicesproduProduktettttIda: string | null;

  @Column("varchar", {
    name: "produ_produktetttt_produ_servicesprodu_services_idb",
    nullable: true,
    length: 36
  })
  produProduktettttProduServicesproduServicesIdb: string | null;
}
