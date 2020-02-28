import { Column, Entity } from "typeorm";

@Entity("project", { schema: "sugar" })
export class Project {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("date", { name: "estimated_start_date", nullable: true })
  estimatedStartDate: string | null;

  @Column("date", { name: "estimated_end_date", nullable: true })
  estimatedEndDate: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("varchar", { name: "priority", nullable: true, length: 255 })
  priority: string | null;
}
