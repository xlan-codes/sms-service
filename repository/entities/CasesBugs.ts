import { Column, Entity, Index } from "typeorm";

@Index("idx_cas_bug_cas", ["caseId"], {})
@Index("idx_cas_bug_bug", ["bugId"], {})
@Index("idx_case_bug", ["caseId", "bugId"], {})
@Entity("cases_bugs", { schema: "sugar" })
export class CasesBugs {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "case_id", nullable: true, length: 36 })
  caseId: string | null;

  @Column("varchar", { name: "bug_id", nullable: true, length: 36 })
  bugId: string | null;

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
