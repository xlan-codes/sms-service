import { Column, Entity, Index } from "typeorm";

@Index("idx_ie_id", ["ieId"], {})
@Index("idx_mail_date", ["ieId", "mbox", "senddate"], {})
@Index("idx_mail_from", ["ieId", "mbox", "fromaddr"], {})
@Index("idx_mail_subj", ["subject"], {})
@Index("idx_mail_to", ["toaddr"], {})
@Entity("email_cache", { schema: "sugar" })
export class EmailCache {
  @Column("char", { name: "ie_id", nullable: true, length: 36 })
  ieId: string | null;

  @Column("varchar", { name: "mbox", nullable: true, length: 60 })
  mbox: string | null;

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;

  @Column("varchar", { name: "fromaddr", nullable: true, length: 100 })
  fromaddr: string | null;

  @Column("varchar", { name: "toaddr", nullable: true, length: 255 })
  toaddr: string | null;

  @Column("datetime", { name: "senddate", nullable: true })
  senddate: Date | null;

  @Column("varchar", { name: "message_id", nullable: true, length: 255 })
  messageId: string | null;

  @Column("int", { name: "mailsize", nullable: true, unsigned: true })
  mailsize: number | null;

  @Column("int", { name: "imap_uid", nullable: true, unsigned: true })
  imapUid: number | null;

  @Column("int", { name: "msgno", nullable: true, unsigned: true })
  msgno: number | null;

  @Column("tinyint", { name: "recent", nullable: true })
  recent: number | null;

  @Column("tinyint", { name: "flagged", nullable: true })
  flagged: number | null;

  @Column("tinyint", { name: "answered", nullable: true })
  answered: number | null;

  @Column("tinyint", { name: "deleted", nullable: true })
  deleted: number | null;

  @Column("tinyint", { name: "seen", nullable: true })
  seen: number | null;

  @Column("tinyint", { name: "draft", nullable: true })
  draft: number | null;
}
