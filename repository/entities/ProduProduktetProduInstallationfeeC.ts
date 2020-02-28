import { Column, Entity, Index } from "typeorm";

@Index(
  "produ_produktet_produ_installationfee_ida1",
  ["produProduktetProduInstallationfeeproduInstallationfeeIda"],
  {}
)
@Index(
  "produ_produktet_produ_installationfee_alt",
  ["produProduktetProduInstallationfeeproduProduktetIdb"],
  {}
)
@Entity("produ_produktet_produ_installationfee_c", { schema: "sugar" })
export class ProduProduktetProduInstallationfeeC {
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
    name: "produ_produktet_produ_installationfeeprodu_installationfee_ida",
    nullable: true,
    length: 36
  })
  produProduktetProduInstallationfeeproduInstallationfeeIda: string | null;

  @Column("varchar", {
    name: "produ_produktet_produ_installationfeeprodu_produktet_idb",
    nullable: true,
    length: 36
  })
  produProduktetProduInstallationfeeproduProduktetIdb: string | null;
}
