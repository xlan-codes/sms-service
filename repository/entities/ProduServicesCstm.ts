import { Column, Entity } from "typeorm";

@Entity("produ_services_cstm", { schema: "sugar" })
export class ProduServicesCstm {
  @Column("char", { primary: true, name: "id_c", length: 36 })
  idC: string;

  @Column("int", { name: "downloadrate_c", nullable: true })
  downloadrateC: number | null;

  @Column("int", { name: "uploadrate_c", nullable: true })
  uploadrateC: number | null;

  @Column("varchar", { name: "idforradius_c", nullable: true, length: 255 })
  idforradiusC: string | null;

  @Column("varchar", { name: "testfield_c", nullable: true, length: 255 })
  testfieldC: string | null;
}
