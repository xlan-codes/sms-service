import { Column, Entity, Index } from "typeorm";

@Index("emails_textfromaddr", ["fromAddr"], {})
@Entity("emails_text", { schema: "sugar" })
export class EmailsText {
  @Column("char", { primary: true, name: "email_id", length: 36 })
  emailId: string;

  @Column("varchar", { name: "from_addr", nullable: true, length: 255 })
  fromAddr: string | null;

  @Column("varchar", { name: "reply_to_addr", nullable: true, length: 255 })
  replyToAddr: string | null;

  @Column("text", { name: "to_addrs", nullable: true })
  toAddrs: string | null;

  @Column("text", { name: "cc_addrs", nullable: true })
  ccAddrs: string | null;

  @Column("text", { name: "bcc_addrs", nullable: true })
  bccAddrs: string | null;

  @Column("longtext", { name: "description", nullable: true })
  description: string | null;

  @Column("longtext", { name: "description_html", nullable: true })
  descriptionHtml: string | null;

  @Column("longtext", { name: "raw_source", nullable: true })
  rawSource: string | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;
}
