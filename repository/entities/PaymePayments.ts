import { Column, Entity } from "typeorm";

@Entity("payme_payments", { schema: "sugar" })
export class PaymePayments {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
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

  @Column("varchar", {
    name: "payme_payments_type",
    nullable: true,
    length: 100
  })
  paymePaymentsType: string | null;

  @Column("varchar", { name: "lead_source", nullable: true, length: 50 })
  leadSource: string | null;

  @Column("double", { name: "amount", nullable: true, precision: 22 })
  amount: number | null;

  @Column("double", { name: "amount_usdollar", nullable: true, precision: 22 })
  amountUsdollar: number | null;

  @Column("char", { name: "currency_id", nullable: true, length: 36 })
  currencyId: string | null;

  @Column("date", { name: "date_closed", nullable: true })
  dateClosed: string | null;

  @Column("varchar", { name: "next_step", nullable: true, length: 100 })
  nextStep: string | null;

  @Column("varchar", { name: "sales_stage", nullable: true, length: 100 })
  salesStage: string | null;

  @Column("double", { name: "probability", nullable: true, precision: 22 })
  probability: number | null;

  @Column("decimal", { name: "price", nullable: true, precision: 26, scale: 6 })
  price: string | null;

  @Column("varchar", {
    name: "produktet",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  produktet: string | null;
}
