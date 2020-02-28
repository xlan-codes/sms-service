import { Column, Entity, Index } from "typeorm";

@Index("idx_con_mtg_mtg", ["meetingId"], {})
@Index("idx_con_mtg_con", ["contactId"], {})
@Index("idx_meeting_contact", ["meetingId", "contactId"], {})
@Entity("meetings_contacts", { schema: "sugar" })
export class MeetingsContacts {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "meeting_id", nullable: true, length: 36 })
  meetingId: string | null;

  @Column("varchar", { name: "contact_id", nullable: true, length: 36 })
  contactId: string | null;

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
