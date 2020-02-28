import { Column, Entity, Index } from "typeorm";

@Index("idx_camp_tracker", ["targetTrackerKey"], {})
@Index("idx_camp_campaign_id", ["campaignId"], {})
@Index("idx_camp_more_info", ["moreInformation"], {})
@Index("idx_target_id", ["targetId"], {})
@Index("idx_target_id_deleted", ["targetId", "deleted"], {})
@Entity("campaign_log", { schema: "sugar" })
export class CampaignLog {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("char", { name: "campaign_id", nullable: true, length: 36 })
  campaignId: string | null;

  @Column("varchar", { name: "target_tracker_key", nullable: true, length: 36 })
  targetTrackerKey: string | null;

  @Column("varchar", { name: "target_id", nullable: true, length: 36 })
  targetId: string | null;

  @Column("varchar", { name: "target_type", nullable: true, length: 100 })
  targetType: string | null;

  @Column("varchar", { name: "activity_type", nullable: true, length: 100 })
  activityType: string | null;

  @Column("datetime", { name: "activity_date", nullable: true })
  activityDate: Date | null;

  @Column("varchar", { name: "related_id", nullable: true, length: 36 })
  relatedId: string | null;

  @Column("varchar", { name: "related_type", nullable: true, length: 100 })
  relatedType: string | null;

  @Column("tinyint", {
    name: "archived",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  archived: boolean | null;

  @Column("int", { name: "hits", nullable: true, default: () => "'0'" })
  hits: number | null;

  @Column("char", { name: "list_id", nullable: true, length: 36 })
  listId: string | null;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("varchar", { name: "more_information", nullable: true, length: 100 })
  moreInformation: string | null;

  @Column("char", { name: "marketing_id", nullable: true, length: 36 })
  marketingId: string | null;
}
