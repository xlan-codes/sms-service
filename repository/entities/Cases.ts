import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("casesnumk", ["caseNumber"], { unique: true })
@Index("case_number", ["caseNumber"], {})
@Index("idx_case_name", ["name"], {})
@Index("idx_account_id", ["accountId"], {})
@Index("idx_cases_stat_del", ["assignedUserId", "status", "deleted"], {})
@Entity("cases", { schema: "sugar" })
export class Cases {
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

  @PrimaryGeneratedColumn({ type: "int", name: "case_number" })
  caseNumber: number;

  @Column("varchar", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 100 })
  status: string | null;

  @Column("varchar", { name: "priority", nullable: true, length: 100 })
  priority: string | null;

  @Column("text", { name: "resolution", nullable: true })
  resolution: string | null;

  @Column("text", { name: "work_log", nullable: true })
  workLog: string | null;

  @Column("char", { name: "account_id", nullable: true, length: 36 })
  accountId: string | null;
}
