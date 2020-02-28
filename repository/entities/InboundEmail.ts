import { Column, Entity } from "typeorm";

@Entity("inbound_email", { schema: "sugar" })
export class InboundEmail {
  @Column("varchar", { primary: true, name: "id", length: 36 })
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

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", {
    name: "status",
    nullable: true,
    length: 100,
    default: () => "'Active'"
  })
  status: string | null;

  @Column("varchar", { name: "server_url", nullable: true, length: 100 })
  serverUrl: string | null;

  @Column("varchar", { name: "email_user", nullable: true, length: 100 })
  emailUser: string | null;

  @Column("varchar", { name: "email_password", nullable: true, length: 100 })
  emailPassword: string | null;

  @Column("int", { name: "port", nullable: true })
  port: number | null;

  @Column("varchar", { name: "service", nullable: true, length: 50 })
  service: string | null;

  @Column("text", { name: "mailbox", nullable: true })
  mailbox: string | null;

  @Column("tinyint", {
    name: "delete_seen",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleteSeen: boolean | null;

  @Column("varchar", { name: "mailbox_type", nullable: true, length: 10 })
  mailboxType: string | null;

  @Column("char", { name: "template_id", nullable: true, length: 36 })
  templateId: string | null;

  @Column("text", { name: "stored_options", nullable: true })
  storedOptions: string | null;

  @Column("char", { name: "group_id", nullable: true, length: 36 })
  groupId: string | null;

  @Column("tinyint", {
    name: "is_personal",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  isPersonal: boolean | null;

  @Column("char", { name: "groupfolder_id", nullable: true, length: 36 })
  groupfolderId: string | null;
}
