import { Column, Entity } from "typeorm";

@Entity("cases_cstm", { schema: "sugar" })
export class CasesCstm {
  @Column("char", { primary: true, name: "id_c", length: 36 })
  idC: string;

  @Column("varchar", {
    name: "supportlevel_c",
    nullable: true,
    length: 100,
    default: () => "'level1'"
  })
  supportlevelC: string | null;

  @Column("varchar", {
    name: "category_c",
    nullable: true,
    length: 100,
    default: () => "'1100'"
  })
  categoryC: string | null;

  @Column("datetime", { name: "clientavailablefrom_c", nullable: true })
  clientavailablefromC: Date | null;

  @Column("datetime", { name: "clientavailableto_c", nullable: true })
  clientavailabletoC: Date | null;

  @Column("varchar", {
    name: "technology_c",
    nullable: true,
    length: 100,
    default: () => "'fiber'"
  })
  technologyC: string | null;

  @Column("varchar", {
    name: "product_c",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  productC: string | null;

  @Column("char", { name: "project_id_c", nullable: true, length: 36 })
  projectIdC: string | null;

  @Column("text", { name: "producttechnicaldetails_c", nullable: true })
  producttechnicaldetailsC: string | null;

  @Column("datetime", { name: "closedate_c", nullable: true })
  closedateC: Date | null;

  @Column("text", { name: "solutions_c", nullable: true })
  solutionsC: string | null;
}
