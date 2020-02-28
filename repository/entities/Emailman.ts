import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_eman_list", ["listId", "userId", "deleted"], {})
@Index("idx_eman_campaign_id", ["campaignId"], {})
@Index(
  "idx_eman_relid_reltype_id",
  ["relatedId", "relatedType", "campaignId"],
  {}
)
@Entity("emailman", { schema: "sugar" })
export class Emailman {
  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "user_id", nullable: true, length: 36 })
  userId: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("char", { name: "campaign_id", nullable: true, length: 36 })
  campaignId: string | null;

  @Column("char", { name: "marketing_id", nullable: true, length: 36 })
  marketingId: string | null;

  @Column("char", { name: "list_id", nullable: true, length: 36 })
  listId: string | null;

  @Column("datetime", { name: "send_date_time", nullable: true })
  sendDateTime: Date | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("tinyint", {
    name: "in_queue",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  inQueue: boolean | null;

  @Column("datetime", { name: "in_queue_date", nullable: true })
  inQueueDate: Date | null;

  @Column("int", {
    name: "send_attempts",
    nullable: true,
    default: () => "'0'"
  })
  sendAttempts: number | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("char", { name: "related_id", nullable: true, length: 36 })
  relatedId: string | null;

  @Column("varchar", { name: "related_type", nullable: true, length: 100 })
  relatedType: string | null;
}
