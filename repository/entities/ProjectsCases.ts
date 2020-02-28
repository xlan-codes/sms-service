import { Column, Entity, Index } from "typeorm";

@Index("idx_proj_case_proj", ["projectId"], {})
@Index("idx_proj_case_case", ["caseId"], {})
@Index("projects_cases_alt", ["projectId", "caseId"], {})
@Entity("projects_cases", { schema: "sugar" })
export class ProjectsCases {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "case_id", nullable: true, length: 36 })
  caseId: string | null;

  @Column("varchar", { name: "project_id", nullable: true, length: 36 })
  projectId: string | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;
}
