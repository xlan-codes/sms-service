import { Column, Entity } from "typeorm";

@Entity("produ_produktet_cstm", { schema: "sugar" })
export class ProduProduktetCstm {
  @Column("char", { primary: true, name: "id_c", length: 36 })
  idC: string;

  @Column("varchar", { name: "username_c", nullable: true, length: 255 })
  usernameC: string | null;

  @Column("varchar", { name: "password_c", nullable: true, length: 255 })
  passwordC: string | null;

  @Column("varchar", { name: "mac_address_c", nullable: true, length: 255 })
  macAddressC: string | null;

  @Column("varchar", { name: "product_id_c", nullable: true, length: 255 })
  productIdC: string | null;

  @Column("int", { name: "idforradius_c", nullable: true })
  idforradiusC: number | null;
}
