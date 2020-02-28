import { Column, Entity, Index } from "typeorm";

@Index("idx_proj_opp_proj", ["projectId"], {})
@Index("idx_proj_opp_opp", ["opportunityId"], {})
@Index("projects_opportunities_alt", ["projectId", "opportunityId"], {})
@Entity("projects_opportunities", { schema: "sugar" })
export class ProjectsOpportunities {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "opportunity_id", nullable: true, length: 36 })
  opportunityId: string | null;

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
