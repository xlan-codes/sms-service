import { Column, Entity, Index } from "typeorm";

@Index(
  "produ_produktet_produ_services_1_ida1",
  ["produProduktetProduServices_1produServicesIda"],
  {}
)
@Index(
  "produ_produktet_produ_services_1_alt",
  ["produProduktetProduServices_1produProduktetIdb"],
  {}
)
@Entity("produ_produktet_produ_services_1_c", { schema: "sugar" })
export class ProduProduktetProduServices_1C {
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
    name: "produ_produktet_produ_services_1produ_services_ida",
    nullable: true,
    length: 36
  })
  produProduktetProduServices_1produServicesIda: string | null;

  @Column("varchar", {
    name: "produ_produktet_produ_services_1produ_produktet_idb",
    nullable: true,
    length: 36
  })
  produProduktetProduServices_1produProduktetIdb: string | null;
}
