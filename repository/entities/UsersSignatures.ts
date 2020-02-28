import { Column, Entity, Index } from "typeorm";

@Index("idx_usersig_uid", ["userId"], {})
@Entity("users_signatures", { schema: "sugar" })
export class UsersSignatures {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;

  @Column("varchar", { name: "user_id", nullable: true, length: 36 })
  userId: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("text", { name: "signature", nullable: true })
  signature: string | null;

  @Column("text", { name: "signature_html", nullable: true })
  signatureHtml: string | null;
}
