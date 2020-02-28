import { Column, Entity, Index } from "typeorm";

@Index("idx_tsk_name", ["name"], {})
@Index("idx_task_con_del", ["contactId", "deleted"], {})
@Index("idx_task_par_del", ["parentId", "parentType", "deleted"], {})
@Index("idx_task_assigned", ["assignedUserId"], {})
@Index("idx_task_status", ["status"], {})
@Entity("tasks", { schema: "sugar" })
export class Tasks {
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
    name: "status",
    nullable: true,
    length: 100,
    default: () => "'Not Started'"
  })
  status: string | null;

  @Column("tinyint", {
    name: "date_due_flag",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  dateDueFlag: boolean | null;

  @Column("datetime", { name: "date_due", nullable: true })
  dateDue: Date | null;

  @Column("tinyint", {
    name: "date_start_flag",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  dateStartFlag: boolean | null;

  @Column("datetime", { name: "date_start", nullable: true })
  dateStart: Date | null;

  @Column("varchar", { name: "parent_type", nullable: true, length: 255 })
  parentType: string | null;

  @Column("char", { name: "parent_id", nullable: true, length: 36 })
  parentId: string | null;

  @Column("char", { name: "contact_id", nullable: true, length: 36 })
  contactId: string | null;

  @Column("varchar", { name: "priority", nullable: true, length: 100 })
  priority: string | null;
}
