import { Column, Entity, Index } from "typeorm";

@Index(
  "produ_produktet_produ_services_ida1",
  ["produProduktetProduServicesproduProduktetIda"],
  {}
)
@Index(
  "produ_produktet_produ_services_idb2",
  ["produProduktetProduServicesproduServicesIdb"],
  {}
)
@Entity("produ_produktet_produ_services_c", { schema: "sugar" })
export class ProduProduktetProduServicesC {
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
    name: "produ_produktet_produ_servicesprodu_produktet_ida",
    nullable: true,
    length: 36
  })
  produProduktetProduServicesproduProduktetIda: string | null;

  @Column("varchar", {
    name: "produ_produktet_produ_servicesprodu_services_idb",
    nullable: true,
    length: 36
  })
  produProduktetProduServicesproduServicesIdb: string | null;
}
