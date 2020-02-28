import { Column, Entity, Index } from "typeorm";

@Index("idx_currency_name", ["name", "deleted"], {})
@Entity("currencies", { schema: "sugar" })
export class Currencies {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 36 })
  name: string | null;

  @Column("varchar", { name: "symbol", nullable: true, length: 36 })
  symbol: string | null;

  @Column("varchar", { name: "iso4217", nullable: true, length: 3 })
  iso4217: string | null;

  @Column("double", {
    name: "conversion_rate",
    nullable: true,
    precision: 22,
    default: () => "'0'"
  })
  conversionRate: number | null;

  @Column("varchar", { name: "status", nullable: true, length: 100 })
  status: string | null;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "created_by", length: 36 })
  createdBy: string;
}
