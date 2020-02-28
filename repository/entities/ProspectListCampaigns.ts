import { Column, Entity, Index } from "typeorm";

@Index("idx_pro_id", ["prospectListId"], {})
@Index("idx_cam_id", ["campaignId"], {})
@Index("idx_prospect_list_campaigns", ["prospectListId", "campaignId"], {})
@Entity("prospect_list_campaigns", { schema: "sugar" })
export class ProspectListCampaigns {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "prospect_list_id", nullable: true, length: 36 })
  prospectListId: string | null;

  @Column("varchar", { name: "campaign_id", nullable: true, length: 36 })
  campaignId: string | null;

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
