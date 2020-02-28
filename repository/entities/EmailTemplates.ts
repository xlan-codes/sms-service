import { Column, Entity, Index } from "typeorm";

@Index("idx_email_template_name", ["name"], {})
@Entity("email_templates", { schema: "sugar" })
export class EmailTemplates {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("varchar", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("varchar", { name: "published", nullable: true, length: 3 })
  published: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;

  @Column("text", { name: "body", nullable: true })
  body: string | null;

  @Column("text", { name: "body_html", nullable: true })
  bodyHtml: string | null;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;

  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @Column("tinyint", { name: "text_only", nullable: true, width: 1 })
  textOnly: boolean | null;

  @Column("varchar", { name: "type", nullable: true, length: 255 })
  type: string | null;
}
