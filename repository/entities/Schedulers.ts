import { Column, Entity, Index } from "typeorm";

@Index("idx_schedule", ["dateTimeStart", "deleted"], {})
@Entity("schedulers", { schema: "sugar" })
export class Schedulers {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "job", nullable: true, length: 255 })
  job: string | null;

  @Column("datetime", { name: "date_time_start", nullable: true })
  dateTimeStart: Date | null;

  @Column("datetime", { name: "date_time_end", nullable: true })
  dateTimeEnd: Date | null;

  @Column("varchar", { name: "job_interval", nullable: true, length: 100 })
  jobInterval: string | null;

  @Column("time", { name: "time_from", nullable: true })
  timeFrom: string | null;

  @Column("time", { name: "time_to", nullable: true })
  timeTo: string | null;

  @Column("datetime", { name: "last_run", nullable: true })
  lastRun: Date | null;

  @Column("varchar", { name: "status", nullable: true, length: 100 })
  status: string | null;

  @Column("tinyint", {
    name: "catch_up",
    nullable: true,
    width: 1,
    default: () => "'1'"
  })
  catchUp: boolean | null;
}
