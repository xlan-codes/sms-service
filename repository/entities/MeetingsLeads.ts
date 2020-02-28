import { Column, Entity, Index } from "typeorm";

@Index("idx_lead_meeting_meeting", ["meetingId"], {})
@Index("idx_lead_meeting_lead", ["leadId"], {})
@Index("idx_meeting_lead", ["meetingId", "leadId"], {})
@Entity("meetings_leads", { schema: "sugar" })
export class MeetingsLeads {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "meeting_id", nullable: true, length: 36 })
  meetingId: string | null;

  @Column("varchar", { name: "lead_id", nullable: true, length: 36 })
  leadId: string | null;

  @Column("varchar", {
    name: "required",
    nullable: true,
    length: 1,
    default: () => "'1'"
  })
  required: string | null;

  @Column("varchar", {
    name: "accept_status",
    nullable: true,
    length: 25,
    default: () => "'none'"
  })
  acceptStatus: string | null;

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
