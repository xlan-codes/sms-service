import { Column, Entity, Index } from "typeorm";

@Index(
  "produ_produktet_leads_ida1",
  ["produProduktetLeadsproduProduktetIda"],
  {}
)
@Index("produ_produktet_leads_idb2", ["produProduktetLeadsleadsIdb"], {})
@Entity("produ_produktet_leads_c", { schema: "sugar" })
export class ProduProduktetLeadsC {
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
    name: "produ_produktet_leadsprodu_produktet_ida",
    nullable: true,
    length: 36
  })
  produProduktetLeadsproduProduktetIda: string | null;

  @Column("varchar", {
    name: "produ_produktet_leadsleads_idb",
    nullable: true,
    length: 36
  })
  produProduktetLeadsleadsIdb: string | null;
}
