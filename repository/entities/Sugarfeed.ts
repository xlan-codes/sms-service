import { Column, Entity, Index } from "typeorm";

@Index("sgrfeed_date", ["dateEntered", "deleted"], {})
@Index(
  "idx_sgrfeed_rmod_rid_date",
  ["relatedModule", "relatedId", "dateEntered"],
  {}
)
@Entity("sugarfeed", { schema: "sugar" })
export class Sugarfeed {
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

  @Column("varchar", { name: "description", nullable: true, length: 255 })
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

  @Column("varchar", { name: "related_module", nullable: true, length: 100 })
  relatedModule: string | null;

  @Column("char", { name: "related_id", nullable: true, length: 36 })
  relatedId: string | null;

  @Column("varchar", { name: "link_url", nullable: true, length: 255 })
  linkUrl: string | null;

  @Column("varchar", { name: "link_type", nullable: true, length: 30 })
  linkType: string | null;
}
