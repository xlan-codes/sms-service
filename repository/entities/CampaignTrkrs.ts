import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("campaign_tracker_key_idx", ["trackerKey"], {})
@Entity("campaign_trkrs", { schema: "sugar" })
export class CampaignTrkrs {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "tracker_name", nullable: true, length: 30 })
  trackerName: string | null;

  @Column("varchar", {
    name: "tracker_url",
    nullable: true,
    length: 255,
    default: () => "'http://'"
  })
  trackerUrl: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "tracker_key" })
  trackerKey: number;

  @Column("char", { name: "campaign_id", nullable: true, length: 36 })
  campaignId: string | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("tinyint", {
    name: "is_optout",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  isOptout: boolean | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;
}
