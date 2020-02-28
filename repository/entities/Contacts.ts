import { Column, Entity, Index } from "typeorm";

@Index("idx_cont_last_first", ["lastName", "firstName", "deleted"], {})
@Index("idx_contacts_del_last", ["deleted", "lastName"], {})
@Index("idx_cont_del_reports", ["deleted", "reportsToId", "lastName"], {})
@Index("idx_reports_to_id", ["reportsToId"], {})
@Index("idx_del_id_user", ["deleted", "id", "assignedUserId"], {})
@Index("idx_cont_assigned", ["assignedUserId"], {})
@Entity("contacts", { schema: "sugar" })
export class Contacts {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @Column("varchar", { name: "salutation", nullable: true, length: 255 })
  salutation: string | null;

  @Column("varchar", { name: "first_name", nullable: true, length: 100 })
  firstName: string | null;

  @Column("varchar", { name: "last_name", nullable: true, length: 100 })
  lastName: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 100 })
  title: string | null;

  @Column("varchar", { name: "department", nullable: true, length: 255 })
  department: string | null;

  @Column("tinyint", {
    name: "do_not_call",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  doNotCall: boolean | null;

  @Column("varchar", { name: "phone_home", nullable: true, length: 100 })
  phoneHome: string | null;

  @Column("varchar", { name: "phone_mobile", nullable: true, length: 100 })
  phoneMobile: string | null;

  @Column("varchar", { name: "phone_work", nullable: true, length: 100 })
  phoneWork: string | null;

  @Column("varchar", { name: "phone_other", nullable: true, length: 100 })
  phoneOther: string | null;

  @Column("varchar", { name: "phone_fax", nullable: true, length: 100 })
  phoneFax: string | null;

  @Column("varchar", {
    name: "primary_address_street",
    nullable: true,
    length: 150
  })
  primaryAddressStreet: string | null;

  @Column("varchar", {
    name: "primary_address_city",
    nullable: true,
    length: 100
  })
  primaryAddressCity: string | null;

  @Column("varchar", {
    name: "primary_address_state",
    nullable: true,
    length: 100
  })
  primaryAddressState: string | null;

  @Column("varchar", {
    name: "primary_address_postalcode",
    nullable: true,
    length: 20
  })
  primaryAddressPostalcode: string | null;

  @Column("varchar", {
    name: "primary_address_country",
    nullable: true,
    length: 255
  })
  primaryAddressCountry: string | null;

  @Column("varchar", {
    name: "alt_address_street",
    nullable: true,
    length: 150
  })
  altAddressStreet: string | null;

  @Column("varchar", { name: "alt_address_city", nullable: true, length: 100 })
  altAddressCity: string | null;

  @Column("varchar", { name: "alt_address_state", nullable: true, length: 100 })
  altAddressState: string | null;

  @Column("varchar", {
    name: "alt_address_postalcode",
    nullable: true,
    length: 20
  })
  altAddressPostalcode: string | null;

  @Column("varchar", {
    name: "alt_address_country",
    nullable: true,
    length: 255
  })
  altAddressCountry: string | null;

  @Column("varchar", { name: "assistant", nullable: true, length: 75 })
  assistant: string | null;

  @Column("varchar", { name: "assistant_phone", nullable: true, length: 100 })
  assistantPhone: string | null;

  @Column("varchar", { name: "lead_source", nullable: true, length: 255 })
  leadSource: string | null;

  @Column("char", { name: "reports_to_id", nullable: true, length: 36 })
  reportsToId: string | null;

  @Column("date", { name: "birthdate", nullable: true })
  birthdate: string | null;

  @Column("char", { name: "campaign_id", nullable: true, length: 36 })
  campaignId: string | null;
}
