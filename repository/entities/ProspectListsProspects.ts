import { Column, Entity, Index } from "typeorm";

@Index("idx_plp_pro_id", ["prospectListId"], {})
@Index("idx_plp_rel_id", ["relatedId", "relatedType", "prospectListId"], {})
@Entity("prospect_lists_prospects", { schema: "sugar" })
export class ProspectListsProspects {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "prospect_list_id", nullable: true, length: 36 })
  prospectListId: string | null;

  @Column("varchar", { name: "related_id", nullable: true, length: 36 })
  relatedId: string | null;

  @Column("varchar", { name: "related_type", nullable: true, length: 25 })
  relatedType: string | null;

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
