import { Column, Entity, Index } from "typeorm";

@Index("idx_accnt_id_del", ["id", "deleted"], {})
@Index("idx_accnt_name_del", ["name", "deleted"], {})
@Index("idx_accnt_assigned_del", ["deleted", "assignedUserId"], {})
@Index("idx_accnt_parent_id", ["parentId"], {})
@Entity("accounts", { schema: "sugar" })
export class Accounts {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 150 })
  name: string | null;

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

  @Column("varchar", { name: "account_type", nullable: true, length: 50 })
  accountType: string | null;

  @Column("varchar", { name: "industry", nullable: true, length: 50 })
  industry: string | null;

  @Column("varchar", { name: "annual_revenue", nullable: true, length: 100 })
  annualRevenue: string | null;

  @Column("varchar", { name: "phone_fax", nullable: true, length: 100 })
  phoneFax: string | null;

  @Column("varchar", {
    name: "billing_address_street",
    nullable: true,
    length: 150
  })
  billingAddressStreet: string | null;

  @Column("varchar", {
    name: "billing_address_city",
    nullable: true,
    length: 100
  })
  billingAddressCity: string | null;

  @Column("varchar", {
    name: "billing_address_state",
    nullable: true,
    length: 100
  })
  billingAddressState: string | null;

  @Column("varchar", {
    name: "billing_address_postalcode",
    nullable: true,
    length: 20
  })
  billingAddressPostalcode: string | null;

  @Column("varchar", {
    name: "billing_address_country",
    nullable: true,
    length: 255
  })
  billingAddressCountry: string | null;

  @Column("varchar", { name: "rating", nullable: true, length: 100 })
  rating: string | null;

  @Column("varchar", { name: "phone_office", nullable: true, length: 100 })
  phoneOffice: string | null;

  @Column("varchar", { name: "phone_alternate", nullable: true, length: 100 })
  phoneAlternate: string | null;

  @Column("varchar", { name: "website", nullable: true, length: 255 })
  website: string | null;

  @Column("varchar", { name: "ownership", nullable: true, length: 100 })
  ownership: string | null;

  @Column("varchar", { name: "employees", nullable: true, length: 10 })
  employees: string | null;

  @Column("varchar", { name: "ticker_symbol", nullable: true, length: 10 })
  tickerSymbol: string | null;

  @Column("varchar", {
    name: "shipping_address_street",
    nullable: true,
    length: 150
  })
  shippingAddressStreet: string | null;

  @Column("varchar", {
    name: "shipping_address_city",
    nullable: true,
    length: 100
  })
  shippingAddressCity: string | null;

  @Column("varchar", {
    name: "shipping_address_state",
    nullable: true,
    length: 100
  })
  shippingAddressState: string | null;

  @Column("varchar", {
    name: "shipping_address_postalcode",
    nullable: true,
    length: 20
  })
  shippingAddressPostalcode: string | null;

  @Column("varchar", {
    name: "shipping_address_country",
    nullable: true,
    length: 255
  })
  shippingAddressCountry: string | null;

  @Column("char", { name: "parent_id", nullable: true, length: 36 })
  parentId: string | null;

  @Column("varchar", { name: "sic_code", nullable: true, length: 10 })
  sicCode: string | null;

  @Column("char", { name: "campaign_id", nullable: true, length: 36 })
  campaignId: string | null;
}
