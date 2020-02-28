import { Column, Entity, Index } from "typeorm";

@Index("idx_app_active", ["assignedUserId", "application", "validated"], {})
@Entity("eapm", { schema: "sugar" })
export class Eapm {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @Column("varchar", { name: "url", nullable: true, length: 255 })
  url: string | null;

  @Column("varchar", {
    name: "application",
    nullable: true,
    length: 100,
    default: () => "'webex'"
  })
  application: string | null;

  @Column("text", { name: "api_data", nullable: true })
  apiData: string | null;

  @Column("varchar", { name: "consumer_key", nullable: true, length: 255 })
  consumerKey: string | null;

  @Column("varchar", { name: "consumer_secret", nullable: true, length: 255 })
  consumerSecret: string | null;

  @Column("varchar", { name: "oauth_token", nullable: true, length: 255 })
  oauthToken: string | null;

  @Column("varchar", { name: "oauth_secret", nullable: true, length: 255 })
  oauthSecret: string | null;

  @Column("tinyint", { name: "validated", nullable: true, width: 1 })
  validated: boolean | null;
}
