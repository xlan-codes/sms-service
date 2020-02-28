import { Column, Entity, Index } from "typeorm";

@Index("idx_ie_autoreplied_to", ["autorepliedTo"], {})
@Entity("inbound_email_autoreply", { schema: "sugar" })
export class InboundEmailAutoreply {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("varchar", { name: "autoreplied_to", nullable: true, length: 100 })
  autorepliedTo: string | null;

  @Column("char", { name: "ie_id", length: 36 })
  ieId: string;
}
