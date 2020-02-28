import { Column, Entity, Index } from "typeorm";

@Index(
  "addex_addexpiredate_produ_produktet_ida1",
  ["addexAddexpiredateProduProduktetproduProduktetIda"],
  {}
)
@Index(
  "addex_addexpiredate_produ_produktet_alt",
  ["addexAddexpiredateProduProduktetaddexAddexpiredateIdb"],
  {}
)
@Entity("addex_addexpiredate_produ_produktet_c", { schema: "sugar" })
export class AddexAddexpiredateProduProduktetC {
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
    name: "addex_addexpiredate_produ_produktetprodu_produktet_ida",
    nullable: true,
    length: 36
  })
  addexAddexpiredateProduProduktetproduProduktetIda: string | null;

  @Column("varchar", {
    name: "addex_addexpiredate_produ_produktetaddex_addexpiredate_idb",
    nullable: true,
    length: 36
  })
  addexAddexpiredateProduProduktetaddexAddexpiredateIdb: string | null;
}
