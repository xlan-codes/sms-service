import { Column, Entity, Index } from "typeorm";

@Index("oe_user_id_idx", ["id", "userId"], {})
@Entity("outbound_email", { schema: "sugar" })
export class OutboundEmail {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("varchar", {
    name: "type",
    nullable: true,
    length: 15,
    default: () => "'user'"
  })
  type: string | null;

  @Column("char", { name: "user_id", length: 36 })
  userId: string;

  @Column("varchar", {
    name: "mail_sendtype",
    nullable: true,
    length: 8,
    default: () => "'smtp'"
  })
  mailSendtype: string | null;

  @Column("varchar", {
    name: "mail_smtptype",
    nullable: true,
    length: 20,
    default: () => "'other'"
  })
  mailSmtptype: string | null;

  @Column("varchar", { name: "mail_smtpserver", nullable: true, length: 100 })
  mailSmtpserver: string | null;

  @Column("int", {
    name: "mail_smtpport",
    nullable: true,
    default: () => "'0'"
  })
  mailSmtpport: number | null;

  @Column("varchar", { name: "mail_smtpuser", nullable: true, length: 100 })
  mailSmtpuser: string | null;

  @Column("varchar", { name: "mail_smtppass", nullable: true, length: 100 })
  mailSmtppass: string | null;

  @Column("tinyint", {
    name: "mail_smtpauth_req",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  mailSmtpauthReq: boolean | null;

  @Column("int", { name: "mail_smtpssl", nullable: true, default: () => "'0'" })
  mailSmtpssl: number | null;
}
