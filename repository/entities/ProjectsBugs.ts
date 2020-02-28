import { Column, Entity, Index } from "typeorm";

@Index("idx_proj_bug_proj", ["projectId"], {})
@Index("idx_proj_bug_bug", ["bugId"], {})
@Index("projects_bugs_alt", ["projectId", "bugId"], {})
@Entity("projects_bugs", { schema: "sugar" })
export class ProjectsBugs {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "bug_id", nullable: true, length: 36 })
  bugId: string | null;

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
