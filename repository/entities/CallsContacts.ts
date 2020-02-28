import { Column, Entity, Index } from "typeorm";

@Index("idx_con_call_call", ["callId"], {})
@Index("idx_con_call_con", ["contactId"], {})
@Index("idx_call_contact", ["callId", "contactId"], {})
@Entity("calls_contacts", { schema: "sugar" })
export class CallsContacts {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "call_id", nullable: true, length: 36 })
  callId: string | null;

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
