import { Column, Entity, Index } from "typeorm";

@Index(
  "payme_payments_produ_services_ida1",
  ["paymePaymentsProduServicesproduServicesIda"],
  {}
)
@Index(
  "payme_payments_produ_services_alt",
  ["paymePaymentsProduServicespaymePaymentsIdb"],
  {}
)
@Entity("payme_payments_produ_services_c", { schema: "sugar" })
export class PaymePaymentsProduServicesC {
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
    name: "payme_payments_produ_servicesprodu_services_ida",
    nullable: true,
    length: 36
  })
  paymePaymentsProduServicesproduServicesIda: string | null;

  @Column("varchar", {
    name: "payme_payments_produ_servicespayme_payments_idb",
    nullable: true,
    length: 36
  })
  paymePaymentsProduServicespaymePaymentsIdb: string | null;
}
