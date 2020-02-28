import { Column, Entity } from "typeorm";

@Entity("payme_payments_cstm", { schema: "sugar" })
export class PaymePaymentsCstm {
  @Column("char", { primary: true, name: "id_c", length: 36 })
  idC: string;

  @Column("int", { name: "quantity_c", nullable: true })
  quantityC: number | null;

  @Column("varchar", { name: "totalvalue_c", nullable: true, length: 255 })
  totalvalueC: string | null;

  @Column("varchar", {
    name: "datecloseservice_c",
    nullable: true,
    length: 255
  })
  datecloseserviceC: string | null;
}
