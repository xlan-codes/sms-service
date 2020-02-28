import { Column, Entity, Index } from "typeorm";

@Index("idx_emmkt_name", ["name"], {})
@Index("idx_emmkit_del", ["deleted"], {})
@Entity("email_marketing", { schema: "sugar" })
export class EmailMarketing {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "from_name", nullable: true, length: 100 })
  fromName: string | null;

  @Column("varchar", { name: "from_addr", nullable: true, length: 100 })
  fromAddr: string | null;

  @Column("varchar", { name: "reply_to_name", nullable: true, length: 100 })
  replyToName: string | null;

  @Column("varchar", { name: "reply_to_addr", nullable: true, length: 100 })
  replyToAddr: string | null;

  @Column("varchar", { name: "inbound_email_id", nullable: true, length: 36 })
  inboundEmailId: string | null;

  @Column("datetime", { name: "date_start", nullable: true })
  dateStart: Date | null;

  @Column("char", { name: "template_id", length: 36 })
  templateId: string;

  @Column("varchar", { name: "status", nullable: true, length: 100 })
  status: string | null;

  @Column("char", { name: "campaign_id", nullable: true, length: 36 })
  campaignId: string | null;

  @Column("tinyint", {
    name: "all_prospect_lists",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  allProspectLists: boolean | null;
}
