import { Column, Entity, Index } from "typeorm";

@Index("idx_email_name", ["name"], {})
@Index("idx_message_id", ["messageId"], {})
@Index("idx_email_parent_id", ["parentId"], {})
@Index("idx_email_assigned", ["assignedUserId", "type", "status"], {})
@Entity("emails", { schema: "sugar" })
export class Emails {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;

  @Column("datetime", { name: "date_sent", nullable: true })
  dateSent: Date | null;

  @Column("varchar", { name: "message_id", nullable: true, length: 255 })
  messageId: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 100 })
  type: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 100 })
  status: string | null;

  @Column("tinyint", { name: "flagged", nullable: true, width: 1 })
  flagged: boolean | null;

  @Column("tinyint", { name: "reply_to_status", nullable: true, width: 1 })
  replyToStatus: boolean | null;

  @Column("varchar", {
    name: "intent",
    nullable: true,
    length: 100,
    default: () => "'pick'"
  })
  intent: string | null;

  @Column("char", { name: "mailbox_id", nullable: true, length: 36 })
  mailboxId: string | null;

  @Column("varchar", { name: "parent_type", nullable: true, length: 100 })
  parentType: string | null;

  @Column("char", { name: "parent_id", nullable: true, length: 36 })
  parentId: string | null;
}
