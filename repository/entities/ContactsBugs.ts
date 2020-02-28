import { Column, Entity, Index } from "typeorm";

@Index("idx_con_bug_con", ["contactId"], {})
@Index("idx_con_bug_bug", ["bugId"], {})
@Index("idx_contact_bug", ["contactId", "bugId"], {})
@Entity("contacts_bugs", { schema: "sugar" })
export class ContactsBugs {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "contact_id", nullable: true, length: 36 })
  contactId: string | null;

  @Column("varchar", { name: "bug_id", nullable: true, length: 36 })
  bugId: string | null;

  @Column("varchar", { name: "contact_role", nullable: true, length: 50 })
  contactRole: string | null;

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
