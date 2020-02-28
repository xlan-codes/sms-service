import { Column, Entity } from "typeorm";

@Entity("contacts_cstm", { schema: "sugar" })
export class ContactsCstm {
  @Column("char", { primary: true, name: "id_c", length: 36 })
  idC: string;

  @Column("varchar", {
    name: "contactcategory_c",
    nullable: true,
    length: 100,
    default: () => "'empty'"
  })
  contactcategoryC: string | null;

  @Column("varchar", { name: "middlename_c", nullable: true, length: 255 })
  middlenameC: string | null;

  @Column("varchar", { name: "leaddescription_c", nullable: true, length: 255 })
  leaddescriptionC: string | null;

  @Column("tinyint", {
    name: "postpaidautobilling_c",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  postpaidautobillingC: boolean | null;

  @Column("varchar", { name: "contactid_c", nullable: true, length: 255 })
  contactidC: string | null;

  @Column("varchar", { name: "passportid_c", nullable: true, length: 255 })
  passportidC: string | null;

  @Column("varchar", {
    name: "paymenttype_c",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  paymenttypeC: string | null;

  @Column("varchar", { name: "cashholdername_c", nullable: true, length: 255 })
  cashholdernameC: string | null;

  @Column("varchar", {
    name: "creditcardtype_c",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  creditcardtypeC: string | null;

  @Column("varchar", { name: "expirationdate_c", nullable: true, length: 255 })
  expirationdateC: string | null;

  @Column("varchar", { name: "cardnumber_c", nullable: true, length: 255 })
  cardnumberC: string | null;

  @Column("varchar", { name: "cvv_c", nullable: true, length: 255 })
  cvvC: string | null;

  @Column("varchar", { name: "invoicenumber_c", nullable: true, length: 255 })
  invoicenumberC: string | null;

  @Column("varchar", {
    name: "pospayment_c",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  pospaymentC: string | null;

  @Column("varchar", {
    name: "bankname_c",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  banknameC: string | null;

  @Column("varchar", { name: "companyname_c", nullable: true, length: 255 })
  companynameC: string | null;

  @Column("varchar", { name: "contactperson_c", nullable: true, length: 255 })
  contactpersonC: string | null;

  @Column("varchar", { name: "nipt_c", nullable: true, length: 255 })
  niptC: string | null;

  @Column("varchar", {
    name: "companysrepresentative_c",
    nullable: true,
    length: 255
  })
  companysrepresentativeC: string | null;

  @Column("varchar", { name: "contact_id_c", nullable: true, length: 255 })
  contactIdC: string | null;
}
