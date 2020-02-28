import { Column, Entity, Index } from "typeorm";

@Index(
  "payme_payments_produ_produktet_ida1",
  ["paymePaymentsProduProduktetproduProduktetIda"],
  {}
)
@Index(
  "payme_payments_produ_produktet_alt",
  ["paymePaymentsProduProduktetpaymePaymentsIdb"],
  {}
)
@Entity("payme_payments_produ_produktet_c", { schema: "sugar" })
export class PaymePaymentsProduProduktetC {
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
    name: "payme_payments_produ_produktetprodu_produktet_ida",
    nullable: true,
    length: 36
  })
  paymePaymentsProduProduktetproduProduktetIda: string | null;

  @Column("varchar", {
    name: "payme_payments_produ_produktetpayme_payments_idb",
    nullable: true,
    length: 36
  })
  paymePaymentsProduProduktetpaymePaymentsIdb: string | null;
}
