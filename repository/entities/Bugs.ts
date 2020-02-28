import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bugsnumk", ["bugNumber"], { unique: true })
@Index("bug_number", ["bugNumber"], {})
@Index("idx_bug_name", ["name"], {})
@Index("idx_bugs_assigned_user", ["assignedUserId"], {})
@Entity("bugs", { schema: "sugar" })
export class Bugs {
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

  @PrimaryGeneratedColumn({ type: "int", name: "bug_number" })
  bugNumber: number;

  @Column("varchar", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 100 })
  status: string | null;

  @Column("varchar", { name: "priority", nullable: true, length: 100 })
  priority: string | null;

  @Column("varchar", { name: "resolution", nullable: true, length: 255 })
  resolution: string | null;

  @Column("text", { name: "work_log", nullable: true })
  workLog: string | null;

  @Column("varchar", { name: "found_in_release", nullable: true, length: 255 })
  foundInRelease: string | null;

  @Column("varchar", { name: "fixed_in_release", nullable: true, length: 255 })
  fixedInRelease: string | null;

  @Column("varchar", { name: "source", nullable: true, length: 255 })
  source: string | null;

  @Column("varchar", { name: "product_category", nullable: true, length: 255 })
  productCategory: string | null;
}
