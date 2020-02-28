import { Column, Entity } from "typeorm";

@Entity("project_task", { schema: "sugar" })
export class ProjectTask {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "project_id", length: 36 })
  projectId: string;

  @Column("int", { name: "project_task_id", nullable: true })
  projectTaskId: number | null;

  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("text", { name: "predecessors", nullable: true })
  predecessors: string | null;

  @Column("date", { name: "date_start", nullable: true })
  dateStart: string | null;

  @Column("int", { name: "time_start", nullable: true })
  timeStart: number | null;

  @Column("int", { name: "time_finish", nullable: true })
  timeFinish: number | null;

  @Column("date", { name: "date_finish", nullable: true })
  dateFinish: string | null;

  @Column("int", { name: "duration", nullable: true })
  duration: number | null;

  @Column("text", { name: "duration_unit", nullable: true })
  durationUnit: string | null;

  @Column("int", { name: "actual_duration", nullable: true })
  actualDuration: number | null;

  @Column("int", { name: "percent_complete", nullable: true })
  percentComplete: number | null;

  @Column("date", { name: "date_due", nullable: true })
  dateDue: string | null;

  @Column("time", { name: "time_due", nullable: true })
  timeDue: string | null;

  @Column("int", { name: "parent_task_id", nullable: true })
  parentTaskId: number | null;

  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("varchar", { name: "priority", nullable: true, length: 255 })
  priority: string | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("tinyint", { name: "milestone_flag", nullable: true, width: 1 })
  milestoneFlag: boolean | null;

  @Column("int", { name: "order_number", nullable: true, default: () => "'1'" })
  orderNumber: number | null;

  @Column("int", { name: "task_number", nullable: true })
  taskNumber: number | null;

  @Column("int", { name: "estimated_effort", nullable: true })
  estimatedEffort: number | null;

  @Column("int", { name: "actual_effort", nullable: true })
  actualEffort: number | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("int", {
    name: "utilization",
    nullable: true,
    default: () => "'100'"
  })
  utilization: number | null;
}
