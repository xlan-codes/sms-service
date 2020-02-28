import { Column, Entity, Index } from "typeorm";

@Index("idx_status_scheduler", ["status", "schedulerId"], {})
@Index("idx_status_time", ["status", "executeTime", "dateEntered"], {})
@Index("idx_status_entered", ["status", "dateEntered"], {})
@Index("idx_status_modified", ["status", "dateModified"], {})
@Entity("job_queue", { schema: "sugar" })
export class JobQueue {
  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

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

  @Column("char", { name: "scheduler_id", nullable: true, length: 36 })
  schedulerId: string | null;

  @Column("datetime", { name: "execute_time", nullable: true })
  executeTime: Date | null;

  @Column("varchar", { name: "status", nullable: true, length: 20 })
  status: string | null;

  @Column("varchar", { name: "resolution", nullable: true, length: 20 })
  resolution: string | null;

  @Column("text", { name: "message", nullable: true })
  message: string | null;

  @Column("varchar", { name: "target", nullable: true, length: 255 })
  target: string | null;

  @Column("text", { name: "data", nullable: true })
  data: string | null;

  @Column("tinyint", {
    name: "requeue",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  requeue: boolean | null;

  @Column("tinyint", { name: "retry_count", nullable: true })
  retryCount: number | null;

  @Column("tinyint", { name: "failure_count", nullable: true })
  failureCount: number | null;

  @Column("int", { name: "job_delay", nullable: true })
  jobDelay: number | null;

  @Column("varchar", { name: "client", nullable: true, length: 255 })
  client: string | null;

  @Column("int", { name: "percent_complete", nullable: true })
  percentComplete: number | null;
}
