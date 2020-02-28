import { Column, Entity, Index } from "typeorm";

@Index("idx_con_users_con", ["contactId"], {})
@Index("idx_con_users_user", ["userId"], {})
@Index("idx_contacts_users", ["contactId", "userId"], {})
@Entity("contacts_users", { schema: "sugar" })
export class ContactsUsers {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "contact_id", nullable: true, length: 36 })
  contactId: string | null;

  @Column("varchar", { name: "user_id", nullable: true, length: 36 })
  userId: string | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;
}
