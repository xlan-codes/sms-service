import { Column, Entity, Index } from "typeorm";

@Index("ckey", ["cKey"], { unique: true })
@Entity("oauth_consumer", { schema: "sugar" })
export class OauthConsumer {
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

  @Column("varchar", {
    name: "c_key",
    nullable: true,
    unique: true,
    length: 255
  })
  cKey: string | null;

  @Column("varchar", { name: "c_secret", nullable: true, length: 255 })
  cSecret: string | null;
}
