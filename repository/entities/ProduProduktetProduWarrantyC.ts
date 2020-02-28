import { Column, Entity, Index } from "typeorm";

@Index(
  "produ_produktet_produ_warranty_ida1",
  ["produProduktetProduWarrantyproduWarrantyIda"],
  {}
)
@Index(
  "produ_produktet_produ_warranty_alt",
  ["produProduktetProduWarrantyproduProduktetIdb"],
  {}
)
@Entity("produ_produktet_produ_warranty_c", { schema: "sugar" })
export class ProduProduktetProduWarrantyC {
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
    name: "produ_produktet_produ_warrantyprodu_warranty_ida",
    nullable: true,
    length: 36
  })
  produProduktetProduWarrantyproduWarrantyIda: string | null;

  @Column("varchar", {
    name: "produ_produktet_produ_warrantyprodu_produktet_idb",
    nullable: true,
    length: 36
  })
  produProduktetProduWarrantyproduProduktetIdb: string | null;
}
