import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("camp_auto_tracker_key", ["trackerKey"], {})
@Index("idx_campaign_name", ["name"], {})
@Entity("campaigns", { schema: "sugar" })
export class Campaigns {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "tracker_key" })
  trackerKey: number;

  @Column("int", {
    name: "tracker_count",
    nullable: true,
    default: () => "'0'"
  })
  trackerCount: number | null;

  @Column("varchar", {
    name: "refer_url",
    nullable: true,
    length: 255,
    default: () => "'http://'"
  })
  referUrl: string | null;

  @Column("varchar", { name: "tracker_text", nullable: true, length: 255 })
  trackerText: string | null;

  @Column("date", { name: "start_date", nullable: true })
  startDate: string | null;

  @Column("date", { name: "end_date", nullable: true })
  endDate: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 100 })
  status: string | null;

  @Column("int", { name: "impressions", nullable: true, default: () => "'0'" })
  impressions: number | null;

  @Column("char", { name: "currency_id", nullable: true, length: 36 })
  currencyId: string | null;

  @Column("double", { name: "budget", nullable: true, precision: 22 })
  budget: number | null;

  @Column("double", { name: "expected_cost", nullable: true, precision: 22 })
  expectedCost: number | null;

  @Column("double", { name: "actual_cost", nullable: true, precision: 22 })
  actualCost: number | null;

  @Column("double", { name: "expected_revenue", nullable: true, precision: 22 })
  expectedRevenue: number | null;

  @Column("varchar", { name: "campaign_type", nullable: true, length: 100 })
  campaignType: string | null;

  @Column("text", { name: "objective", nullable: true })
  objective: string | null;

  @Column("text", { name: "content", nullable: true })
  content: string | null;

  @Column("varchar", { name: "frequency", nullable: true, length: 100 })
  frequency: string | null;
}
